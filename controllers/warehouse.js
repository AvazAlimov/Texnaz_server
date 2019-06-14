import models from '../models';
import stock from './stock';

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

function getStocks(warehouseId) {
  return new Promise((resolve, reject) => {
    models.Stock.findAll({
      where: { warehouseId },
      include: [
        {
          model: models.Product,
          as: 'product',
          include: [
            {
              model: models.Price,
              as: 'prices',
              order: [['id', 'DESC']],
              limit: 1,
            }
          ]
        }
      ]
    }).then(stocks => {
      resolve(stocks);
    }).catch(err => reject(err));
  });
}

async function totalPrice(warehouses, res, next) {
  for (let warehouse of warehouses) {
    await getStocks(warehouse.id)
      .then(stocks => {
        let totalPrice = 0;
        stocks.forEach(element => {
          totalPrice += element.product.prices[0].secondPrice;
        });
        warehouse.setDataValue('totalPrice', totalPrice);
      });
  }
  next(warehouses);
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
