import models from '../models';

function find(where, res, next) {
  models.Province.findAll({
    where,
    include: [
      {
        model: models.Territory,
        as: 'territory',
      },
    ],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(req, res) {
    const where = {};
    if (Object.keys(req.query).length) {
      Object.keys(req.query).forEach((key) => {
        where[key] = req.query[key];
      });
    }
    find(where, res, (items) => {
      res.status(200).json(items);
    });
  },
  get(req, res) {
    find({ id: req.params.id }, res, (items) => {
      res.status(200).json(items);
    });
  },
};
