import models from '../models';

function find(where, res, next) {
  models.PreStock.findAll({
    where,
    include: [
      {
        model: models.Product,
        include: [{ model: models.Brand }],
        as: 'product',
      },
      {
        model: models.Warehouse,
        as: 'warehouse',
      },
    ],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(req, res) {
    let where = null;
    if (req.query.warehouse) {
      where = {
        warehouseId: req.query.warehouse,
      };
    }
    find(where, res, (items) => {
      res.status(200).json(items);
    });
  },

  createMultiple(req, res) {
    if (req.preStocks.length) {
      models.sequelize
        .getQueryInterface()
        .bulkInsert('PreStocks', req.preStocks)
        .then(() => res.sendStatus(201))
        .catch(error => res.status(502).json(error));
    } else {
      res.sendStatus(200);
    }
  },

  async acceptMultiple(req, res) {
    const preStocks = await models.PreStock.findAll({
      where: {
        id: { [models.Sequelize.Op.in]: req.body.preStocks.map(item => item.id) },
      },
      raw: true,
    });
    const stocks = [];
    const updates = [];
    const deletes = [];
    preStocks.forEach((item) => {
      const stock = req.body.preStocks.find(preStock => preStock.id === item.id);
      stocks.push({
        productId: stock.productId,
        quantity: stock.arrived,
        arrival_date: stock.arrival_date,
        expiry_date: stock.expiry_date,
        defected: stock.defected,
        warehouseId: stock.warehouseId,
      });
      // eslint-disable-next-line no-param-reassign
      item.quantity -= stock.arrived;
      if (item.quantity > 0) {
        updates.push(item);
      } else {
        deletes.push(item.id);
      }
    });
    Promise.all([
      models.sequelize.getQueryInterface().bulkInsert('Stocks', stocks),
      models.PreStock.bulkCreate(updates, { updateOnDuplicate: true }),
      models.PreStock.destroy({ where: { id: deletes } }),
    ])
      .then(() => res.sendStatus(201))
      .catch(error => res.status(502).json(error));
  },
};
