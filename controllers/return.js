import models from '../models';

function find(where, res, next) {
  models.Return.findAll({
    where,
    include: [{
      model: models.Stock,
      as: 'stock',
      include: [{
        model: models.Product,
        as: 'product',
        include: [{
          model: models.Brand,
        }],
      }],
    }, {
      model: models.Warehouse,
      as: 'From',
    }, {
      model: models.Warehouse,
      as: 'To',
    }],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(req, res) {
    find({
      to: req.params.warehouseId,
    }, res, (items) => {
      res.status(200).json(items);
    });
  },

  async acceptMultiple(req, res) {
    if (req.returns.length) {
      const returns = [];
      const losses = [];

      const stocks = await models.Stock.findAll({
        where: {
          id: { [models.Sequelize.Op.in]: req.returns.map(item => item.stockId) },
        },
        raw: true,
      });

      req.returns.forEach((ret) => {
        const stock = stocks.find(item => item.id === ret.stockId);
        if (stock) {
          stock.quantity += parseFloat(ret.arrived);
          stocks.push(stock);
          returns.push(ret);
          if (ret.quantity > ret.arrived) {
            losses.push({
              stockId: stock.id,
              quantity: ret.quantity - ret.arrived,
              warehouseId: ret.to,
            });
          }
        }
      });
      Promise.all([
        models.Stock.bulkCreate(stocks, { updateOnDuplicate: true }),
        models.Return.destroy({
          where: { id: { [models.Sequelize.Op.in]: returns.map(ret => ret.id) } },
        }),
        models.sequelize.getQueryInterface().bulkInsert('Losts', losses),
      ])
        .then(() => res.sendStatus(201))
        .catch(error => res.status(502).json(error));
    }
    res.sendStatus(200);
  },
};
