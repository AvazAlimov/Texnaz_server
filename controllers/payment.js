import models from '../models';

function find(where, res, next, paginate = {}) {
  models.Payment.findAll({
    offset: (paginate.page * paginate.pageSize) || null,
    limit: Number.parseFloat(paginate.pageSize) || null,
    where,
    include: [
      {
        model: models.Province,
        as: 'province',
      },
      {
        model: models.User,
        as: 'user',
      },
      {
        model: models.User,
        as: 'manager',
      },
      {
        model: models.Brand,
        as: 'brand',
      },
      {
        model: models.Client,
        as: 'client',
        /* include: [{
          model: models.Payment,
          as: 'payments',
        }], */
      },
    ],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(req, res) {
    let where = null;
    if (Object.keys(req.query).length) {
      where = {};
      Object.keys(req.query).forEach((key) => {
        where[key] = req.query[key];
      });
    }
    find(where, res, (items) => {
      res.status(200).json(items);
    });
  },
  getWithPagination(req, res) {
    const paginate = {
      page: 0,
      pageSize: 5,
      ...req.query,
    };
    find({ approved: req.query.approved }, res, async (items) => {
      res.status(200).json({
        total: await models.Payment.count({ where: { approved: req.query.approved } }),
        data: items,
      });
    }, paginate);
  },
  get(req, res) {
    find({ id: req.params.id }, res, (items) => {
      if (items.length) res.status(200).json(items[0]);
      else res.sendStatus(404);
    });
  },

  create(req, res) {
    models.Payment.create(req.payment)
      .then(payment => res.status(201).json(payment))
      .catch(error => res.status(502).json(error));
  },

  approve(req, res) {
    find({ id: req.params.id }, res, ([item]) => {
      if (item) {
        models.Payment.update({
          approved: true,
          createdAt: new Date(),
        }, { where: { id: item.id } })
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      } else res.sendStatus(404);
    });
  },

  updateCurrentBalance(req, res) {
    find({ id: req.params.id }, res, ([item]) => {
      if (item) {
        models.Payment.update({
          currentClientBalance: item.client.balance,
        }, { where: { id: item.id } })
          .then(() => res.sendStatus(200))
          .catch(error => res.status(502).json(error));
      } else res.sendStatus(404);
    });
  },

  delete(req, res) {
    models.Payment.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};

/*

find(null, res, (items) => {
      res.status(200).json(req.query);
    }, { page, pageSize });

*/
