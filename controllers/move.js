import models from '../models';

// function find(where, res, next) {
//   models.Item.findAll({
//     where,
//   })
//     .then(items => next(items))
//     .catch(error => res.status(502).json(error));
// }


export default {
  getAll() {
    // find({
    //   to: req.params.to,
    // }, res, (items) => {
    //   res.status(200).json(items);
    // });
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

  deleteMultiple() {

  },
};
