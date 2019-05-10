import models from '../models';

function find(where, res, next) {
  models.PreStock.findAll({
    where,
    include: [{
      model: models.Product,
      include: [{ model: models.Brand }],
      as: 'product',
    }, {
      model: models.Warehouse,
      as: 'warehouse',
    }],
  })
    .then(items => next(items))
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
    find(where, res, (items) => {
      res.status(200).json(items);
    });
  },

  createMultiple(req, res) {
    if (req.preStocks.length) {
      models.sequelize
        .getQueryInterface()
        .bulkInsert('PreStocks', req.preStocks)
        .then(() => res.sendStatus(201))
        .catch(error => res.status(502).json(error));
    } else {
      res.sendStatus(200);
    }
  },
};
