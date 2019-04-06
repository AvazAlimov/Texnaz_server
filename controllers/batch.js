import models from '../models';

function find(where, res, next) {
  models.Batch.findAll({
    where,
    include: [
      {
        model: models.BatchExpanses,
        as: 'expanses',
      },
      {
        model: models.Warehouse,
        as: 'Warehouse',
      },
      {
        model: models.Item,
        as: 'items',
        include: [
          {
            model: models.Product,
            as: 'product',
          },
        ],
      },
    ],
  })
    .then(items => next(items))
    .catch(error => res.status(502).json(error));
}

export default {
  getAll(_, res) {
    find(null, res, (items) => {
      res.status(200).json(items);
    });
  },

  get(req, res) {
    find({
      id: req.params.id,
    }, res, ([item]) => {
      if (item) res.status(200).json(item);
      else res.sendStatus(404);
    });
  },

  async create(_, res) {
    models.Batch.create({
      total: (await models.Configuration.findByPk(1)).value,
      conversion: (await models.Configuration.findByPk(2)).value,
      bank_transfer: (await models.Configuration.findByPk(3)).value,
      market_rate: (await models.Configuration.findByPk(4)).value,
      official_rate: (await models.Configuration.findByPk(5)).value,
      exchange_rate: (await models.Configuration.findByPk(6)).value,
      transport_cash: (await models.Configuration.findByPk(7)).value,
      transport_non_cash: (await models.Configuration.findByPk(8)).value,
    })
      .then(async (batch) => {
        const expanses = await models.Expanse.findAll({ raw: true });
        const batchExpanses = expanses.map(expanse => ({
          name: expanse.name,
          value: expanse.value,
          is_transport: expanse.is_transport,
          is_cash: expanse.is_cash,
          batchId: batch.id,
        }));
        await models.sequelize.getQueryInterface().bulkInsert('BatchExpanses', batchExpanses);
        find({ id: batch.id }, res, ([item]) => { res.status(200).json(item); });
      })
      .catch(error => res.status(502).json(error));
  },

  update(req, res) {
    models.Batch.update(req.batch, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  async delete(req, res) {
    await models.BatchExpanses.destroy({ where: { batchId: req.params.id }, raw: true });
    await models.Item.destroy({ where: { batchId: req.params.id }, raw: true });
    models.Batch.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },
};
