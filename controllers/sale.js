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
        model: models.SaleItem,
        as: 'items',
        include: [
          {
            model: models.Price,
            as: 'price',
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

  create(req, res) {
    models.Sale.create(req.sale)
      .then((sale) => {
        const tasks = [];
        req.sale.items.forEach((item) => {
          // eslint-disable-next-line no-param-reassign
          item.saleId = sale.id;
          tasks.push(models.SaleItem.create(item));
        });
        Promise.all(tasks)
          .then(() => res.status(200).json(sale))
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },
};
