import models from '../models';

function find(where, res, next) {
  models.Mix.findAll({
    where,
    include: [
      {
        model: models.User,
        as: 'manager',
      },
      {
        model: models.MixRange,
        as: 'ranges',
        include: [
          {
            model: models.MixRangeBrands,
            as: 'brands',
          },
        ],
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
    models.Mix.create(req.mix)
      .then((mix) => {
        // const brands = req.mix.brands
        //   .map(brandId => ({
        //     planId: plan.id,
        //     brandId,
        //   }));
        // const ranges = req.plan.ranges
        //   .map(range => ({
        //     planId: plan.id,
        //     from: range.from,
        //     percentage: range.percentage,
        //   }));
        // Promise.all([
        //   models.PlanBrands.bulkCreate(brands),
        //   models.Range.bulkCreate(ranges),
        // ])
        //   .then(() => res.sendStatus(200))
        //   .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    // Promise.all([
    //   models.PlanBrands.destroy({ where: { planId: req.params.id } }),
    //   models.Range.destroy({ where: { planId: req.params.id } }),
    // ])
    //   .then(() => {
    //     models.Plan.update(req.plan, { where: { id: req.params.id } })
    //       .then(() => {
    //         const brands = req.plan.brands
    //           .map(brandId => ({
    //             planId: req.params.id,
    //             brandId,
    //           }));
    //         const ranges = req.plan.ranges
    //           .map(range => ({
    //             planId: req.params.id,
    //             from: range.from,
    //             percentage: range.percentage,
    //           }));
    //         Promise.all([
    //           models.PlanBrands.bulkCreate(brands),
    //           models.Range.bulkCreate(ranges),
    //         ])
    //           .then(() => res.sendStatus(200))
    //           .catch(error => res.status(502).json(error));
    //       })
    //       .catch(error => res.status(502).json(error));
    //   })
    //   .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Mix.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
