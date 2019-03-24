import { Op } from 'sequelize';
import models from '../models';

function findProducts(where, res, next) {
  models.Product.findAll({ where })
    .then(products => next(products))
    .catch(error => res.status(502).json(error));
}

function getSelector(query) {
  return {
    [Op.or]: [
      { name: { [Op.like]: `%${query}%` } },
      { code: { [Op.like]: `%${query}%` } },
      { packing: { [Op.like]: `%${query}%` } },
      { color: { [Op.like]: `%${query}%` } },
    ],
  };
}

export default {
  getAll(req, res) {
    findProducts(req.query.q ? getSelector(req.query.q) : null, res, (products) => {
      res.status(200).json(products);
    });
  },

  get(req, res) {
    findProducts({
      id: req.params.id,
    }, res, ([product]) => {
      if (product) res.status(200).json(product);
      else res.sendStatus(404);
    });
  },

  create(req, res) {
    models.Product.create(req.product)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Product.update(req.product, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  delete(req, res) {
    models.Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
