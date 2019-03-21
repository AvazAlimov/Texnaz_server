import models from '../models';

function find(where, res, next) {
  models.Supplier.findAll({ where })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(_, res) {
    find(null, res, (suppliers) => {
      res.status(200).json(suppliers);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([supplier]) => {
      if (supplier) res.status(200).json(supplier);
      else res.sendStatus(404);
    });
  },

  create(req, res) {
    models.Supplier.create(req.supplier)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Supplier.update(req.supplier, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Supplier.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
