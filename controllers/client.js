import models from '../models';

function find(where, res, next) {
  models.Client.findAll({
    where,
    include: [
      {
        model: models.Region,
        include: [{ model: models.Province, as: 'province' }],
        as: 'region',
      },
      {
        model: models.User,
        as: 'manager',
      },
      {
        model: models.Payment,
        as: 'payments',
      },
    ],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(_, res) {
    find(null, res, (items) => {
      res.status(200).json(items);
    });
  },

  get(req, res) {
    find(
      {
        id: req.params.id,
      },
      res,
      ([item]) => {
        if (item) res.status(200).json(item);
        else res.sendStatus(404);
      },
    );
  },

  create(req, res) {
    models.Client.create(req.client)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Client.update(req.client, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Client.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
