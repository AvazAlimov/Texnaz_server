import models from '../models';

function find(where, res, next) {
  models.Item.findAll({
    where,
    include: [
      {
        model: models.Product,
        as: 'product',
      },
    ],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(req, res) {
    find({ batchId: req.params.batchId }, res, (items) => {
      res.status(200).json(items);
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
    models.Item.create(req.item)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Item.update(req.item, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Item.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
