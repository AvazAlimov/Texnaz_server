import models from '../models';

function find(where, res, next) {
  models.Plan.findAll({
    where,
    include: [
      {
        model: models.User,
        as: 'manager',
      },
      {
        model: models.PlanBrands,
        as: 'brands',
      },
    ],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(req, res) {
    let where = null;
    if (Object.keys(req.query).length) {
      where = {};
      Object.keys(req.query).forEach((key) => {
        where[key] = req.query[key];
      });
    }
    find(where, res, (items) => {
      res.status(200).json(items);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([item]) => {
      if (item) res.status(200).json(item);
      else res.sendStatus(404);
    });
  },

  create(req, res) {
    res.status(200).json({});
  },

  update(req, res) {
    res.status(200).json({});
  },

  delete(req, res) {
    models.PlanBrands.destroy({ where: { planId: req.params.id } })
      .then(() => {
        models.Plan.destroy({ where: { id: req.params.id } })
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },
};
