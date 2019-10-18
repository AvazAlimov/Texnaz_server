import models from '../models';

function find(where, res, next) {
  models.Territory.findAll({
    where,
    include: [
      {
        model: models.Province,
        as: 'provinces',
        attributes: ['id', 'name'],
      },
    ],
  })
    .then(data => next(data.filter(({ id }) => id > 0)))
    .catch(err => res.status(500).json({ err }));
}

export default {
  getAll(req, res) {
    find(null, res, (data) => {
      res.status(200).json(data);
    });
  },
  get(req, res) {
    find(req.params.id, res, (data) => {
      res.status(200).json(data);
    });
  },
};
