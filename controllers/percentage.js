import models from '../models';

function find(where, res, next) {
  models.Percentage.findAll({
    where,
    include: [
      {
        model: models.User,
        as: 'manager',
      },
      {
        model: models.PercentageBrands,
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
    models.Percentage.create(req.percentage)
      .then((percentage) => {
        console.log(percentage);
        const brands = req.percentage.brands
          .map(item => ({
            percentageId: percentage.id,
            brandId: item.brandId,
            percentage: item.percentage,
          }));
        Promise.all([
          models.PercentageBrands.bulkCreate(brands),
        ])
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    Promise.all([
      models.PercentageBrands.destroy({ where: { percentageId: req.params.id } }),
    ])
      .then(() => {
        models.Percentage.update(req.percentage, { where: { id: req.params.id } })
          .then(() => {
            const brands = req.percentage.brands
              .map(item => ({
                percentageId: req.params.id,
                brandId: item.brandId,
                percentage: item.percentage,
              }));
            Promise.all([
              models.PercentageBrands.bulkCreate(brands),
            ])
              .then(() => res.sendStatus(200))
              .catch(error => res.status(502).json(error));
          })
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    Promise.all([
      models.PercentageBrands.destroy({ where: { percentageId: req.params.id } }),
    ])
      .then(() => {
        models.Percentage.destroy({ where: { id: req.params.id } })
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },
};
