import models from '../models';

export default {
  getAll(_, res) {
    models.Rate.findAll({
      include: [
        {
          model: models.User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    })
      .then((data) => { res.status(200).send(data); })
      .catch((err) => { res.send(err); });
  },
  create(req, res) {
    models.Rate.create(req.rate)
      .then(() => res.send(200))
      .catch(err => res.status(504).json(err.message));
  },
};
