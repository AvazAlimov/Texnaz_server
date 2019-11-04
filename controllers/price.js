import models from '../models';

function find(where, res, next) {
  models.Price.findAll({
    where,
    include: [
      {
        model: models.Product,
        include: [{ model: models.Brand }],
        as: 'product',
      },
    ],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

function createLog([price, stock], quantity, userId, res) {
  models.PriceLog.create({
    priceId: price.id,
    productId: price.productId,
    userId,
    quantityBefore: stock.quantity - quantity,
    quantityAfter: stock.quantity,
  })
    .then(() => res.sendStatus(201));
}

export default {
  getAll(_, res) {
    find(null, res, (items) => {
      res.status(200).json(items);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([item]) => {
      if (item) res.status(200).json(item);
      else res.sendStatus(404);
    });
  },

  async getUnpricedProducts(_, res) {
    const priced = await models.Price.findAll({
      attributes: ['productId'],
      raw: true,
    });
    const unpriced = await models.Product.findAll({
      where: { id: { [models.Sequelize.Op.notIn]: priced.map(item => item.productId) } },
      include: [{ model: models.Brand }],
    });
    res.status(200).json(unpriced);
  },

  createMultiple(req, res) {
    if (req.prices.length) {
      Promise.all([
        models.Price.create(req.price),
        models.Stock.find({ attributes: ['quantity'], where: { productId: req.productId } }),
        models.Stock.increment('quantity', { by: req.quantity, where: { productId: req.productId } }),
        /* models.sequelize
          .getQueryInterface()
          .bulkInsert('Prices', req.prices), */
      ])
        .then((result) => {
          createLog(result, req.quantity, req.userId, res);
        })
        .catch(error => res.status(502).json(error));
    } else {
      res.sendStatus(200);
    }
  },
};
