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

  //   get(req, res) {
  //     find({
  //       id: req.params.id,
  //     }, res, ([item]) => {
  //       if (item) res.status(200).json(item);
  //       else res.sendStatus(404);
  //     });
  //   },

  //   create(req, res) {
  //     models.Region.create(req.region)
  //       .then(() => res.sendStatus(201))
  //       .catch(error => res.status(502).json(error));
  //   },

  //   update(req, res) {
  //     models.Region.update(req.region, { where: { id: req.params.id } })
  //       .then(() => res.sendStatus(200))
  //       .catch(error => res.status(502).json(error));
  //   },

//   delete(req, res) {
//     models.Region.destroy({
//       where: {
//         id: req.params.id,
//       },
//     })
//       .then(() => res.sendStatus(200))
//       .catch(error => res.status(502).json(error));
//   },
};
