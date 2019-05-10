import models from '../models';

function find(where, res, next) {
  models.Price.findAll({
    where,
    include: [{
      model: models.Product,
      include: [{ model: models.Brand }],
      as: 'product',
    }],
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

  createMultiple(req, res) {
    if (req.prices.length) {
      models.sequelize
        .getQueryInterface()
        .bulkInsert('Prices', req.prices)
        .then(() => res.sendStatus(201))
        .catch(error => res.status(502).json(error));
    } else {
      res.sendStatus(200);
    }
  },
};
