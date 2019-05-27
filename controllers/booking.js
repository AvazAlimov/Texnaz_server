import models from '../models';

function find(where, res, next) {
  models.Booking.findAll({
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

export default {
  getAll(req, res) {
    find(null, res, (items) => {
      res.status(200).json(items);
    });
  },

  createMultiple(req, res) {
    if (req.bookings.length) {
      models.sequelize
        .getQueryInterface()
        .bulkInsert('Bookings', req.bookings)
        .then(() => res.sendStatus(201))
        .catch(error => res.status(502).json(error));
    } else {
      res.sendStatus(200);
    }
  },

  deleteMultiple(req, res) {

  },
};
