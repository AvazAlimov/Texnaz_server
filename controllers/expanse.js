import models from '../models';

function find(where, res, next) {
  models.Expanse.findAll({ where })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(_, res) {
    find(null, res, (expanses) => {
      res.status(200).json(expanses);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([expanse]) => {
      if (expanse) res.status(200).json(expanse);
      else res.sendStatus(404);
    });
  },

  create(req, res) {
    models.Expanse.create(req.expanse)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Expanse.update(req.expanse, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Expanse.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
