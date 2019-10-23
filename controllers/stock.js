import { Op } from 'sequelize';
import models from '../models';

function find(where, res, next) {
  models.Stock.findAll({
    where,
    include: [{
      model: models.Product,
      as: 'product',
      include: [
        { model: models.Brand },
        {
          model: models.Price,
          as: 'prices',
          order: [['id', 'DESC']],
          limit: 1,
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
    }, {
      model: models.Booking,
      as: 'bookings',
      include: [
        {
          model: models.User,
          as: 'user',
        },
        {
          model: models.Client,
          as: 'client',
        },
      ],
    }, {
      model: models.SaleItem,
      as: 'sales',
      include: [
        {
          model: models.Sale,
          as: 'sale',
          include: [
            {
              model: models.User,
              as: 'manager',
            },
            {
              model: models.Client,
              as: 'client',
            },
          ],
        },
      ],
    }],
  })
    .then(stocks => next(stocks))
    .catch(error => res.status(502).json(error));
}

function getSelector(query) {
  const where = query.warehouse ? {
    warehouseId: query.warehouse,
    quantity: {
      [Op.gt]: 0,
    },
  } : {
    [Op.and]: [],
    quantity: {
      [Op.gt]: 0,
    },
  };
  if (query.arrival_date) {
    where[[Op.and]].push({ arrival_date: query.arrival_date });
  }
  if (query.expiry_date) {
    where[[Op.and]].push({ expiry_date: query.expiry_date });
  }
  if (query.defected) {
    where[[Op.and]].push({ defected: query.defected });
  }
  return where;
}

export default {
  getAll(req, res) {
    let where = null;
    if (Object.keys(req.query).length) where = getSelector(req.query);
    find(where, res, (stocks) => {
      res.status(200).json(stocks);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([stock]) => {
      if (stock) res.status(200).json(stock);
      else res.sendStatus(404);
    });
  },

  createMultiple(req, res) {
    models.sequelize
      .getQueryInterface()
      .bulkInsert('Stocks', req.stocks)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Stock.update(req.stock, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Stock.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
