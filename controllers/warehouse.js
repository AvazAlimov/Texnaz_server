import models from '../models';

function find(where, res, next) {
  models.Warehouse.findAll({
    where,
    include: [{
      model: models.User,
      as: 'owner',
      attributes: ['id', 'name'],
    }],
  })
    .then(warehouses => next(warehouses))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(_, res) {
    find(null, res, (warehouses) => {
      res.status(200).json(warehouses);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([warehouse]) => {
      if (warehouse) res.status(200).json(warehouse);
      else res.sendStatus(404);
    });
  },

  create(req, res) {
    models.Warehouse.create(req.warehouse)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Warehouse.update(req.warehouse, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Warehouse.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
