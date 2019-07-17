import models from '../models';

export default {
  getAll(_, res) {
    models.Rate.findAll()
      .then((data) => { res.status(200).send(data); })
      .catch((err) => { res.send(err); });
  },
  create(req, res) {
    models.Rate.create(req.rate)
      .then(() => res.send(200))
      .catch(err => res.status(501).json(err));
  },
};
