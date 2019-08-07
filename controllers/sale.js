import models from '../models';

function find(where, res, next) {
  models.Sale.findAll({
    where,
    include: [
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

function returnToStock(item, resolved, rejected) {
  new Promise((resolve, reject) => {
    models.SaleItem.findAll({ where: { id: item.id } })
      .then((saleItems) => {
        resolve(saleItems.length ? saleItems[0].quantity : 0);
      }).catch((errors) => { reject(errors); });
  })
    .then((quantity) => {
      models.Stock.findByPk(item.stockId)
        .then((stock) => {
          models.Stock.update({
            quantity: stock.quantity + (quantity - item.quantity),
          }, { where: { id: stock.id } })
            .then(() => { resolved(); });
        })
        .catch((errors) => { rejected(errors); });
    });
}

function rates(where) {
  return new Promise((resolve, reject) => {
    models.Configuration.findAll({ where })
      .then(data => resolve(data[0]))
      .catch(err => reject(err));
  });
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
            models.SaleItem.create(item).then(() => resolve()).catch(error => reject(error));
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
                models.SaleItem.create(item).then(() => resolve()).catch(error => reject(error));
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

  approve(req, res) {
    Promise.all([
      rates({ id: 4 }),
      rates({ id: 5 }),
    ]).then((result) => {
      models.Sale.update({
        approved: 1,
        exchangeRate: result[0].value,
        officialRate: result[1].value,
        userId: req.userId,
      }, {
        where: {
          id: req.params.id,
        },
      }).then(() => {
        const tasks = [];
        find({ id: req.params.id }, res, (sales) => {
          sales[0].toJSON().items.forEach((item) => {
            tasks.push(new Promise((resolve) => {
              models.Stock
                .findByPk(item.stockId)
                .then((stock) => {
                  models.Stock
                    .update({
                      quantity: stock.quantity - item.quantity,
                    }, { where: { id: stock.id } })
                    .then(() => resolve());
                });
            }));
          });
          Promise.all(tasks)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(502).json(error));
        });
      });
    }).catch(error => res.status(502).json(error));
  },

  return(req, res) {
    if (req.body.items.length) {
      const tasks = [];
      req.body.items.forEach((item) => {
        // Updates databse with coming new item and substructs the item quantity from warehouse stocks
        tasks.push(new Promise((resolve, reject) => {
          new Promise((resolved, rejected) => returnToStock(item, resolved, rejected))
            .then(() => {
              models.SaleItem.update(item, { where: { id: item.id } })
                .then(() => { resolve(); })
                .catch((errors) => { reject(errors); });
            });
        }));
      });
      Promise.all(tasks)
        .then(() => {
          // Write user's return history
          models.ReturnClient.create({
            saleId: req.body.items[0].saleId,
            createdAt: new Date(),
          }).then(() => res.send(200))
            .catch((errors) => { res.status(501).json({ errors }); });
        })
        .catch((errors) => { res.status(501).json({ errors }); });
    } else {
      res.send(403);
    }
  },

  disapprove(req, res) {
    models.Sale.update({
      approved: -1,
      userId: req.userId,
    }, {
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.sendStatus(200);
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
    models.Sale.update({
      approved: 1,
      shipped: 1,
      userId: req.userId,
    }, {
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.sendStatus(200);
    })
      .catch(error => res.status(502).json(error));
  },

  rejectShipment(req, res) {
    models.Sale.update({
      approved: -1,
      shipped: 0,
      userId: req.userId,
    }, {
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.sendStatus(200);
    })
      .catch(error => res.status(502).json(error));
  },
};
