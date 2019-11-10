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

function createLog([price, stock, exchangeRate, officialRate], quantity, userId, res) {
  models.PriceLog.create({
    priceId: price.id,
    productId: price.productId,
    exchangeRate: exchangeRate.value,
    officialRate: officialRate.value,
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

  getAllLogs(_, res) {
    models.PriceLog.findAll({
      include: [
        {
          model: models.Price,
          as: 'price',
          attributes: ['firstPrice', 'mixPriceNonCash', 'mixPriceCash', 'secondPrice'],
        },
        {
          model: models.Product,
          as: 'product',
          include: [
            {
              model: models.Brand,
            },
          ],
        },
        {
          model: models.User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    }).then(data => res.status(200).json(data))
      .catch(error => res.status(501).json(error));
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
        models.Configuration.find({ where: { id: 4 } }),
        models.Configuration.find({ where: { id: 5 } }),
        req.stock ? models.Stock.create(req.stock)
          : models.Stock.increment('quantity', { by: req.quantity, where: { productId: req.productId } }),
        /* models.sequelize
          .getQueryInterface()
          .bulkInsert('Prices', req.prices), */
      ])
        .then((result) => {
          if (!req.stock) {
            createLog(result, req.quantity, req.userId, res);
          } else {
            res.send(201);
          }
        })
        .catch(error => res.status(502).json(error));
    } else {
      res.sendStatus(200);
    }
  },
};
