import models from '../models';

function find(where, res, next) {
  models.Client.findAll({
    where,
    include: [
      {
        model: models.Province,
        as: 'province',
      },
      {
        model: models.Region,
        include: [{ model: models.Province, as: 'province' }],
        as: 'region',
      },
      {
        model: models.User,
        as: 'manager',
        include: [
          {
            model: models.User,
            attributes: ['id', 'name'],
            as: 'controller',
          },
        ],
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
  getAll(req, res) {
    const where = {};
    if (Object.keys(req.query).length) {
      Object.keys(req.query).forEach((key) => {
        where[key] = req.query[key];
      });
    }
    find(where, res, (items) => {
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

  updateBalance(req, res) {
    models.Client.findAll({ where: { id: req.params.id } })
      .then(([client]) => {
        models.Client.update({
          balance: client.balance + req.body.balance,
        }, { where: { id: req.params.id } })
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      })
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
