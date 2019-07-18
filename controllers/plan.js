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
      {
        model: models.Range,
        as: 'ranges',
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
    models.Plan.create(req.plan)
      .then((plan) => {
        const brands = req.plan.brands
          .map(brandId => ({
            planId: plan.id,
            brandId,
          }));
        const ranges = req.plan.ranges
          .map(range => ({
            planId: plan.id,
            from: range.from,
            percentage: range.percentage,
          }));
        Promise.all([
          models.PlanBrands.bulkCreate(brands),
          models.Range.bulkCreate(ranges),
        ])
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    Promise.all([
      models.PlanBrands.destroy({ where: { planId: req.params.id } }),
      models.Range.destroy({ where: { planId: req.params.id } }),
    ])
      .then(() => {
        models.Plan.update(req.plan, { where: { id: req.params.id } })
          .then(() => {
            const brands = req.plan.brands
              .map(brandId => ({
                planId: req.params.id,
                brandId,
              }));
            const ranges = req.plan.ranges
              .map(range => ({
                planId: req.params.id,
                from: range.from,
                percentage: range.percentage,
              }));
            Promise.all([
              models.PlanBrands.bulkCreate(brands),
              models.Range.bulkCreate(ranges),
            ])
              .then(() => res.sendStatus(200))
              .catch(error => res.status(502).json(error));
          })
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
    res.status(200).json({});
  },

  delete(req, res) {
    Promise.all([
      models.PlanBrands.destroy({ where: { planId: req.params.id } }),
      models.Range.destroy({ where: { planId: req.params.id } }),
    ])
      .then(() => {
        models.Plan.destroy({ where: { id: req.params.id } })
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },
};
