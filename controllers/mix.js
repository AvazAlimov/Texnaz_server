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
        const ranges = req.mix.ranges.map(range => ({
          mixId: mix.id,
          from: range.from,
        }));
        models.MixRange.bulkCreate(ranges, { returning: true })
          .then((items) => {
            const rangeBrands = [];
            items.forEach((range, index) => {
              req.mix.ranges[index].brands.forEach((item) => {
                rangeBrands.push({
                  rangeId: range.dataValues.id,
                  brandId: item.brandId,
                  percentage: item.percentage,
                });
              });
            });
            models.MixRangeBrands.bulkCreate(rangeBrands)
              .then(() => res.sendStatus(200))
              .catch(error => res.status(502).json(error));
          })
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.MixRange.destroy({ where: { mixId: req.params.id } })
      .then(() => {
        models.Mix.update(req.mix, { where: { id: req.params.id } })
          .then(() => {
            const ranges = req.mix.ranges.map(range => ({
              mixId: req.params.id,
              from: range.from,
            }));
            models.MixRange.bulkCreate(ranges, { returning: true })
              .then((items) => {
                const rangeBrands = [];
                items.forEach((range, index) => {
                  req.mix.ranges[index].brands.forEach((item) => {
                    rangeBrands.push({
                      rangeId: range.dataValues.id,
                      brandId: item.brandId,
                      percentage: item.percentage,
                    });
                  });
                });
                models.MixRangeBrands.bulkCreate(rangeBrands)
                  .then(() => res.sendStatus(200))
                  .catch(error => res.status(502).json(error));
              })
              .catch(error => res.status(502).json(error));
          })
          .catch(error => res.status(502).json(error));
      })
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Mix.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
