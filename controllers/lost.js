import models from '../models';

function find(where, res, next) {
  models.Lost.findAll({
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
    }],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

function check(where, res, next) {
  find(where, res, ([item]) => {
    if (item.quantity <= 0) {
      models.Lost.destroy({ where: { id: item.id } })
        .then(() => next())
        .catch(err => res.status(502).json(err));
    } else {
      next();
    }
  });
}

export default {
  getAll(req, res) {
    find({
      warehouseId: req.params.warehouseId,
    }, res, (items) => {
      res.status(200).json(items);
    });
  },
  found(req, res) {
    find({
      id: req.body.id,
    }, res, ([item]) => {
      new Promise((resolve, reject) => {
        models.Stock.findByPk(item.stockId)
          .then((stock) => {
            models.Stock.update({
              quantity: stock.quantity + Number(req.body.quantity),
            }, { where: { id: stock.id } })
              .then(() => resolve())
              .catch(() => reject());
          })
          .catch(() => reject());
      }).then(() => {
        models.Lost.update({
          quantity: item.quantity - req.body.quantity,
        }, { where: { id: req.body.id } })
          .then(() => {
            check({ id: req.body.id }, res, () => {
              res.send(200);
            });
          })
          .catch(err => res.status(509).json(err));
      });
    });
  },


  //   async acceptMultiple(req, res) {
  //     if (req.returns.length) {
  //       const returns = [];
  //       const losses = [];

  //       const stocks = await models.Stock.findAll({
  //         where: {
  //           id: { [models.Sequelize.Op.in]: req.returns.map(item => item.stockId) },
  //         },
  //         raw: true,
  //       });

//       req.returns.forEach((ret) => {
//         const stock = stocks.find(item => item.id === ret.stockId);
//         if (stock) {
//           stock.quantity += parseFloat(ret.arrived);
//           stocks.push(stock);
//           returns.push(ret);
//           if (ret.quantity > ret.arrived) {
//             losses.push({
//               stockId: stock.id,
//               quantity: ret.quantity - ret.arrived,
//             });
//           }
//         }
//       });
//       Promise.all([
//         models.Stock.bulkCreate(stocks, { updateOnDuplicate: true }),
//         models.Return.destroy({
//           where: { id: { [models.Sequelize.Op.in]: returns.map(ret => ret.id) } },
//         }),
//         models.sequelize.getQueryInterface().bulkInsert('Losts', losses),
//       ])
//         .then(() => res.sendStatus(201))
//         .catch(error => res.status(502).json(error));
//     }
//     res.sendStatus(200);
//   },
};
