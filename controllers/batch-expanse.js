import models from '../models';

function find(where, res, next) {
  models.BatchExpanses.findAll({ where })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(req, res) {
    find({ batchId: req.params.batchId }, res, (batchExpanses) => {
      res.status(200).json(batchExpanses);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([batchExpanse]) => {
      if (batchExpanse) res.status(200).json(batchExpanse);
      else res.sendStatus(404);
    });
  },

  create(req, res) {
    models.BatchExpanses.create(req.batchExpanse)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.BatchExpanses.update(req.batchExpanse, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.BatchExpanses.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
