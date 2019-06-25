import models from '../models';

function find(where, res, next) {
  models.Payment.findAll({
    where,
    include: [
      {
        model: models.User,
        as: 'user',
      },
      {
        model: models.User,
        as: 'manager',
      },
      {
        model: models.Brand,
        as: 'brand',
      },
      {
        model: models.Client,
        as: 'client',
        include: [{
          model: models.Payment,
          as: 'payments',
        }],
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
    find({ id: req.params.id }, res, (items) => {
      if (items.length) res.status(200).json(items[0]);
      else res.sendStatus(404);
    });
  },

  create(req, res) {
    models.Payment.create(req.payment)
      .then(payment => res.status(201).json(payment))
      .catch(error => res.status(502).json(error));
  },

  approve(req, res) {
    find({ id: req.params.id }, res, ([item]) => {
      if (item) {
        models.Payment.update({
          approved: true,
        }, { where: { id: item.id } });
        res.sendStatus(200);
      } else res.sendStatus(404);
    });
  },

  delete(req, res) {
    models.Payment.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
