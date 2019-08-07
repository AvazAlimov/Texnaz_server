import models from '../models';

function find(where, res, next) {
  models.ReturnClient.findAll({
    where,
    include: [
      {
        model: models.Sale,
        as: 'sale',
        include: [
          {
            model: models.Client,
            as: 'client',
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
      },
    ],
  }).then(returns => next(returns))
    .catch((err) => { res.status(501).json(err); });
}

export default {
  getAll(req, res) {
    find(null, res, returns => res.status(201).json(returns));
  },
};
