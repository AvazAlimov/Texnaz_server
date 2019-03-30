import { Op } from 'sequelize';
import models from '../models';

function findProducts(where, res, next) {
  models.Product.findAll({
    where,
    include: [{
      model: models.Tag,
      as: 'tags',
    }],
  })
    .then((products) => {
      next(products);
    })
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

function bindProductTag(tags, product) {
  tags.forEach(async (name) => {
    let tag = await models.Tag.findOne({ where: { name } });
    if (!tag) tag = await models.Tag.create({ name });
    await models.ProductTag.create({ tag: tag.id, product });
  });
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
      .then((product) => {
        bindProductTag(req.product.tags, product.id);
        res.status(201).json(product);
      })
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Product.update(req.product, { where: { id: req.params.id } })
      .then(async () => {
        await models.ProductTag.destroy({ where: { product: req.params.id }, raw: true });
        await bindProductTag(req.product.tags, req.params.id);
        res.sendStatus(200);
      })
      .catch(error => res.status(502).json(error));
  },

  async delete(req, res) {
    await models.ProductTag.destroy({ where: { product: req.params.id }, raw: true });
    models.Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
