import models from '../models';

function find(where, res, next) {
  models.Stock.findAll({
    where,
    include: [{
      model: models.Product,
      include: [{ model: models.Brand }],
      as: 'product',
    }],
  })
    .then(stocks => next(stocks))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(req, res) {
    let where = null;
    if (req.query.warehouse) {
      where = {
        warehouseId: req.query.warehouse,
      };
    }

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
