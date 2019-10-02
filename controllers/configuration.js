import models from '../models';

function find(where, res, next) {
  models.Configuration.findAll({ where })
    .then(configurations => next(configurations))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(_, res) {
    find(null, res, (configurations) => {
      res.status(200).json(configurations);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([configuration]) => {
      if (configuration) res.status(200).json(configuration);
      else res.sendStatus(404);
    });
  },

  getExchangeRate(_, res) {
    find({
      id: 4,
    }, res, ([rate]) => {
      if (rate) res.status(200).json(rate);
      else res.sendStatus(404);
    });
  },

  getOfficialRate(_, res) {
    find({
      id: 5,
    }, res, ([rate]) => {
      if (rate) res.status(200).json(rate);
      else res.sendStatus(404);
    });
  },

  update(req, res) {
    // req.userId
    // if (req.params.id === 4, 5, 6)
    models.Configuration.update(req.configuration, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
