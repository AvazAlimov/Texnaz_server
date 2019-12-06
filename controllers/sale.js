import models from '../models';

function find(where, res, next) {
  models.Sale.findAll({
    where,
    include: [
      {
        model: models.Province,
        as: 'province',
      },
      {
        model: models.Client,
        as: 'client',
        include: [{
          model: models.Payment,
          as: 'payments',
        }],
      },
      {
        model: models.User,
        as: 'user',
      },
      {
        model: models.User,
        as: 'manager',
      },
      {
        model: models.Warehouse,
        as: 'warehouse',
      },
      {
        model: models.SaleItem,
        as: 'items',
        include: [
          {
            model: models.Price,
            as: 'price',
          },
          {
            model: models.Stock,
            as: 'stock',
            include: [
              {
                model: models.Product,
                as: 'product',
                include: [
                  {
                    model: models.Brand,
                  },
                  {
                    model: models.Unit,
                    as: 'typeUnit',
                  },
                  {
                    model: models.Tag,
                    as: 'tags',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

function rates(where) {
  return new Promise((resolve, reject) => {
    models.Configuration.findAll({ where })
      .then(data => resolve(data[0]))
      .catch(err => reject(err));
  });
}

function returnStock(items) {
  return new Promise((resolve, reject) => {
    const tasks = [];
    items.forEach((item) => {
      tasks.push(new Promise((res, rej) => {
        models.Stock.findByPk(item.stockId)
          .then((stock) => {
            models.Stock.update({
              quantity: stock.quantity + item.quantity,
            }, { where: { id: stock.id } })
              .then(() => res());
          })
          .catch(err => rej(err));
      }));
    });
    Promise.all(tasks)
      .then(() => resolve())
      .catch(error => reject(error));
  });
}

// Will be used at return clients logic
function clientBalance({ id }, sum) {
  return new Promise((resolve, reject) => {
    models.Client.findByPk(id)
      .then((client) => {
        models.Client.update({
          balance: client.balance + Number.parseFloat(sum),
        }, {
          where: { id },
        })
          .then(() => resolve())
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });
}

// Will be used at return clients logic
function getSalePrice({ type, items }, officialRate) {
  if ((type === 1) || (type === 4)) {
    return items.map(({ debtPrice, paidPrice }) => (debtPrice === 0 ? paidPrice : debtPrice))
      .reduce((a, b) => a + (b / officialRate), 0);
  }
  return items.map(({ debtPrice, paidPrice }) => (debtPrice === 0 ? paidPrice : debtPrice))
    .reduce((a, b) => a + b, 0);
}

export default {
  getAll(req, res) {
    let where = null;
    if (Object.keys(req.query).length) {
      where = {};
      Object.keys(req.query).forEach((key) => {
        where[key] = req.query[key];
      });
    }
    find(where, res, (items) => {
      res.status(200).json(items);
    });
  },

  get(req, res) {
    find({ id: req.params.id }, res, ([item]) => {
      if (item) { res.status(200).json(item); } else res.sendStatus(404);
    });
  },

  create(req, res) {
    models.Sale.create(req.sale)
      .then((sale) => {
        const tasks = [];
        req.sale.items.forEach((item) => {
          // eslint-disable-next-line no-param-reassign
          item.saleId = sale.id;
          tasks.push(new Promise((resolve, reject) => {
            models.SaleItem.create(item).then(() => {
              models.Stock.findByPk(item.stockId).then((stock) => {
                models.Stock
                  .update({
                    quantity: stock.quantity - item.quantity,
                  }, { where: { id: stock.id } })
                  .then(() => resolve());
              });
            }).catch(error => reject(error));
          }));
        });
        Promise.all(tasks)
          .then(() => res.status(200).json(sale))
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.SaleItem.destroy({ where: { saleId: req.params.id } })
      .then(() => {
        req.sale.approved = 0;
        models.Sale.update(req.sale, { where: { id: req.params.id } })
          .then((sale) => {
            const tasks = [];
            req.sale.items.forEach((item) => {
              // eslint-disable-next-line no-param-reassign
              item.saleId = req.params.id;
              tasks.push(new Promise((resolve, reject) => {
                models.SaleItem.create(item).then(() => {
                  // If it is rejected we take product from stocks, else no need
                  models.Stock.findByPk(item.stockId)
                    .then((stock) => {
                      models.Stock.update({
                        quantity: stock.quantity - item.quantity,
                      }, { where: { id: stock.id } }).then(() => resolve());
                    });
                }).catch(error => reject(error));
              }));
            });
            Promise.all(tasks)
              .then(() => res.status(200).json(sale))
              .catch(error => res.status(502).json(error));
          })
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  updateSaleItem(req, res) {
    models.SaleItem.update(req.body, { where: { id: req.params.id } })
      .then(() => res.send(200))
      .catch(err => res.status(500).json(err));
  },

  // if payment done for specific sale, this method changes isClosed to true
  checkIsClosed(req, res) {
    const tasks = [];
    find({ clientId: req.params.id }, res, (sales) => {
      sales.forEach((sale) => {
        if (!sale.items.filter(({ debtPrice }) => debtPrice !== 0).length) {
          tasks.push(models.Sale.update({ isClosed: true }, { where: { id: sale.id } }));
        }
      });
    });
    Promise.all(tasks)
      .then(() => res.send(200))
      .catch(err => res.status(500).json(err));
  },

  approve(req, res) {
    Promise.all([
      rates({ id: 4 }),
      rates({ id: 5 }),
    ]).then((result) => {
      find({ id: req.params.id }, res, ([sale]) => {
        const tasks = [];
        if (sale.approved === -1) {
          sale.items.forEach((item) => {
            tasks.push(new Promise((res, rej) => {
              models.Stock.findByPk(item.stockId)
                .then((stock) => {
                  models.Stock.update({
                    quantity: stock.quantity - item.quantity,
                  }, { where: { id: stock.id } })
                    .then(() => res())
                    .catch(err => rej(err));
                });
            }));
          });
        }
        tasks.push(models.Sale.update({
          approved: 1,
          exchangeRate: result[0].value,
          officialRate: result[1].value,
          userId: req.userId,
        }, {
          where: {
            id: req.params.id,
          },
        }));
        Promise.all(tasks)
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      });
    }).catch(error => res.status(502).json(error));
  },

  accept(req, res) {
    models.Sale.update({
      accepted: true,
    }, {
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.sendStatus(200);
    })
      .catch(error => res.status(502).json(error));
  },

  disapprove(req, res) {
    Promise.all([
      rates({ id: 5 }),
      models.Sale.update({
        approved: -1,
        userId: req.userId,
      }, {
        where: {
          id: req.params.id,
        },
      }),
    ])
      .then(() => {
        find({ id: req.params.id }, res, ([sale]) => {
          returnStock(sale.items).then(() => res.sendStatus(200));
        });
      })
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.SaleItem.destroy({ where: { saleId: req.params.id } })
      .then(() => {
        models.Sale.destroy({ where: { id: req.params.id } })
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  approveShipment(req, res) {
    find({ id: req.params.id }, res, ([sale]) => {
      models.Sale.update({
        approved: 1,
        shipped: 1,
        currentClientBalance: sale.client.balance,
        userId: req.userId,
      }, {
        where: {
          id: req.params.id,
        },
      }).then(() => {
        // To update client balance, after warehouse owner approved the shipment
        // we need to send back the sale object with approved status
        find({ id: req.params.id }, res, ([data]) => {
          res.status(200).json(data);
        });
      })
        .catch(error => res.status(502).json(error));
    });
  },

  rejectShipment(req, res) {
    Promise.all([
      rates({ id: 5 }),
      models.Sale.update({
        approved: -1,
        shipped: 0,
        userId: req.userId,
      }, {
        where: {
          id: req.params.id,
        },
      }),
    ])
      .then(() => {
        find({ id: req.params.id }, res, ([sale]) => {
          returnStock(sale.items).then(() => res.sendStatus(200));
        });
      })
      .catch(error => res.status(502).json(error));
  },
  empty() {

  },
};
