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
        model: models.Client,
        as: 'client',
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

  create(req, res) {
    models.Payment.create(req.payment)
      .then(payment => res.status(201).json(payment))
      .catch(error => res.status(502).json(error));
  },
};
