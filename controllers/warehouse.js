import models from '../models';

function getStocks(warehouseId) {
  return new Promise((resolve, reject) => {
    models.Stock.findAll({
      where: { warehouseId },
      include: [{
        model: models.Product,
        as: 'product',
        include: [{
          model: models.Price,
          as: 'prices',
          order: [['id', 'DESC']],
          limit: 1,
        }],
      }],
    })
      .then(stocks => resolve(stocks))
      .catch(err => reject(err));
  });
}

function totalPrice(warehouses, res, next) {
  Promise.all(warehouses.map(warehouse => getStocks(warehouse.id)))
    .then((results) => {
      results.forEach((stocks, index) => {
        let price = 0;
        stocks.forEach((stock) => {
          price += stock.product.prices.length
            ? stock.product.prices[0].secondPrice * stock.quantity
            : 0;
        });
        warehouses[index].setDataValue('totalPrice', price);
      });
      next(warehouses);
    })
    .catch(error => res.status(502).json(error));
}

function find(where, res, next) {
  models.Warehouse.findAll({
    where,
    include: [{
      model: models.User,
      as: 'owner',
      attributes: ['id', 'name'],
    }],
  })
    .then(warehouses => totalPrice(warehouses, res, next))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(_, res) {
    find(null, res, (warehouses) => {
      res.status(200).json(warehouses);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([warehouse]) => {
      if (warehouse) res.status(200).json(warehouse);
      else res.sendStatus(404);
    });
  },

  create(req, res) {
    models.Warehouse.create(req.warehouse)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Warehouse.update(req.warehouse, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Warehouse.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
