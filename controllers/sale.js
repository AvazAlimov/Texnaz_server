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

export default {
  getAll(_, res) {
    find(null, res, (items) => {
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
            models.SaleItem.create(item)
              .then(() => {
                resolve();
                // models.Stock.findByPk(item.stockId)
                //   .then((stock) => {
                //     models.Stock.update({
                //       quantity: stock.quantity - item.quantity,
                //     }, { where: { id: stock.id } }).then(() => resolve());
                //   });
              })
              .catch(error => reject(error));
          }));
        });
        Promise.all(tasks)
          .then(() => res.status(200).json(sale))
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  approve(req, res) {
    models.Sale.update({
      approved: 1,
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
    })
      .catch(error => res.status(502).json(error));
  },

  disapprove(req, res) {
    models.Sale.update({
      approved: -1,
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
