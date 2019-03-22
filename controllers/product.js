import models from '../models';

function findProducts(where, res, next) {
  models.Product.findAll({ where })
    .then(products => next(products))
    .catch(error => res.status(502).json(error));
}

function search(query, res) {
  res.status(200).json(query);
}

export default {
  getAll(req, res) {
    const query = req.query.q;
    if (query) search(query, res);
    else {
      findProducts(null, res, (products) => {
        res.status(200).json(products);
      });
    }
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
