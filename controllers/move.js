import models from '../models';

function find(where, res, next) {
  models.Move.findAll({
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

function getSelector(query) {
  const where = {
  };
  if (query.to) {
    where.to = query.to;
  }
  if (query.from) {
    where.from = query.from;
  }
  return where;
}

export default {
  getAll(req, res) {
    console.log('ALL');
    let where = null;
    if (Object.keys(req.query).length) where = getSelector(req.query);
    find(where, res, (items) => {
      res.status(200).json(items);
    });
  },

  getAllPending(req, res) {
    console.log('PENDING');
    const where = {
      to: req.params.warehouseId,
      newStockId: {
        [models.Sequelize.Op.eq]: null,
      },
    };
    find(where, res, (items) => {
      res.status(200).json(items);
    });
  },

  async createMultiple(req, res) {
    if (req.moves.length) {
      const moves = [];
      const stocks = await models.Stock.findAll({
        where: {
          id: { [models.Sequelize.Op.in]: req.moves.map(item => item.stockId) },
        },
        raw: true,
      });
      req.moves.forEach((move) => {
        const stock = stocks.find(item => item.id === move.stockId);
        if (stock && stock.quantity >= move.quantity) {
          stock.quantity -= parseFloat(move.quantity);
          stocks.push(stock);
          moves.push(move);
        }
      });
      Promise.all([
        models.sequelize.getQueryInterface().bulkInsert('Moves', moves),
        models.Stock.bulkCreate(stocks, { updateOnDuplicate: true }),
      ])
        .then(() => res.sendStatus(201))
        .catch(error => res.status(502).json(error));
    }
  },

  acceptMultiple(req, res) {
    const tasks = [];
    if (req.moves.length) {
      req.moves.forEach((move) => {
        tasks.push(new Promise((resolve, reject) => {
          models.Stock.create({
            productId: move.stock.productId,
            quantity: move.quantity,
            arrival_date: move.stock.arrival_date,
            expiry_date: move.stock.expiry_date,
            defected: move.stock.defected,
            warehouseId: move.to,
          }).then((stock) => {
            const updatedMove = move;
            updatedMove.newStockId = stock.id;
            models.Move.update(updatedMove, { where: { id: updatedMove.id } })
              .then(() => resolve())
              .catch(error => reject(error));
          }).catch((error) => {
            reject(error);
          });
        }));
      });
    }
    Promise.all(tasks).then(() => {
      res.sendStatus(201);
    }).catch((error) => {
      res.status(502).json(error);
    });
  },
};
