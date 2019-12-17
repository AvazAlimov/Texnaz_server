import models from '../models';

function find(where, res, next) {
  models.ReturnClient.findAll({
    where,
    include: [
      {
        model: models.Client,
        as: 'client',
        include: [
          {
            model: models.Payment,
            as: 'payments',
          },
          {
            model: models.Province,
            as: 'province',
          },
        ],
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
        model: models.Warehouse,
        as: 'warehouse',
      },
      {
        model: models.ReturnItem,
        as: 'items',
        include: [
          {
            model: models.Price,
            as: 'price',
          },
          {
            model: models.Stock,
            as: 'stock',
            include: [
              {
                model: models.Product,
                as: 'product',
              },
            ],
          },
        ],
      },
    ],
  }).then(returns => next(returns))
    .catch((err) => { res.status(501).json(err); });
}

function returnToStock(item, resolved, rejected) {
  models.Stock.findByPk(item.stockId)
    .then((stock) => {
      models.Stock.update({
        quantity: stock.quantity + Number(item.returnQuantity),
      }, { where: { id: stock.id } })
        .then(() => { resolved(); });
    })
    .catch((errors) => { rejected(errors); });
}

export default {
  getAll(req, res) {
    find(null, res, returns => res.status(201).json(returns));
  },
  get(req, res) {
    find({ id: req.params.id }, res, ([data]) => {
      res.status(200).json(data);
    });
  },
  // Expected oject
  /*
  {
    exRate: '',
    offRate: '',
    type: '',
    items: [
      {
        returnId: 0,
        stockId: 0,
        priceId: 0,
        quantity: 0,
        discount: 0,
        commissionPrice: 0,
      }
    ],
  }
  */
  return(req, res) {
    const tasks = [];
    const finaltasks = [];
    req.return.items.forEach((item) => {
    // Updates databse with coming new item and substructs
    // the item quantity from warehouse stocks
      tasks.push(new Promise((resolve, reject) => {
        new Promise((resolved, rejected) => returnToStock(item, resolved, rejected))
          .then(() => {
            models.SaleItem.update({
              quantity: item.quantity,
            }, { where: { id: item.id } })
              .then(() => { resolve(); })
              .catch((errors) => { reject(errors); });
          });
      }));
    });
    Promise.all(tasks)
      .then(() => {
      // Code above working fine. Database is not updated
      // and created ReturnItem and modified ReturnClient
      // Check these two modules and start editing here.
        models.ReturnClient.create(req.return)
          .then((returnItem) => {
            req.return.items.forEach((item) => {
              finaltasks.push(new Promise((resolve, reject) => {
                // eslint-disable-next-line no-param-reassign
                models.ReturnItem.create({
                  returnClientId: returnItem.id,
                  stockId: item.stockId,
                  priceId: item.priceId,
                  quantity: item.returnQuantity,
                  discount: item.discount,
                  commissionPrice: item.commissionPrice,
                  commissionPriceUsd: item.commissionPriceUsd,
                })
                  .then(() => resolve())
                  .catch(error => reject(error));
              }));
            });
          }).catch(err => res.status(404).json({ err }));
      });
    Promise.all(finaltasks)
      .then(() => res.send(200))
      .catch((error) => { res.status(502).json(error); });
  },

};
