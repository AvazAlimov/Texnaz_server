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
      }, {
        model: models.Warehouse,
        as: 'warehouse',
      }],
    }, {
      model: models.Client,
      as: 'client',
    }, {
      model: models.User,
      as: 'user',
    }],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(req, res) {
    const where = {};
    if (req.query.userId) {
      where.userId = req.query.userId;
    }
    find(where, res, (items) => {
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

  delete(req, res) {
    models.Booking.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
