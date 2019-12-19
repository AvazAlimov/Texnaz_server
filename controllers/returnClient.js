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

function substructBalance({ type }, item, { commissionPrice, commissionPriceUsd }) {
  return (type === 4 || type === 5) ? [
    item.SaleCommissionPrice,
    item.SaleCommissionPriceUsd,
  ] : [
    commissionPrice,
    commissionPriceUsd,
  ];
}

function returnToStock(item, resolved, rejected) {
  models.Stock.findByPk(item.stockId)
    .then((stock) => {
      models.Stock.update({
        quantity: stock.quantity + Number.parseFloat(item.returnQuantity),
      }, { where: { id: stock.id } })
        .then(() => { resolved(); });
    })
    .catch((errors) => { rejected(errors); });
}

function getItemPrice({
  commissionPrice, commissionPriceUsd, returnQuantity, quantity,
}, { price }, { type }) {
  switch (type) {
    case 1:
      return (Number.parseFloat(quantity) - Number.parseFloat(returnQuantity))
        * Number.parseFloat(price.firstPrice);
    case 2:
      return (Number.parseFloat(quantity) - Number.parseFloat(returnQuantity))
        * Number.parseFloat(price.secondPrice);
    case 3:
      return (Number.parseFloat(quantity) - Number.parseFloat(returnQuantity))
        * Number.parseFloat(price.secondPrice);
    case 4:
      return Number.parseFloat(commissionPrice);
    case 5:
      return Number.parseFloat(commissionPriceUsd);
    default:
      return 0;
  }
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


  /*
    When returning
      * Substruct the quantity from warehouse
      * Substruct the quantity from sale
      * Substruct the price of return to respect sale item price
      * Substruct the price of return items from sale price
      * Add returned items price to client balance
      * create returns and returned items on database
  */
  /* When updating sale price
        update debt price in sale if not 0
        update commission prices if type is 4 or 5
 */
  return(req, res) {
    const quantitySubstructFromStock = [];
    const quantitySubstructFromSale = [];
    const priceSubstructFromSale = [];
    const priceAddToClientBalance = [];

    const allReturnItems = [];
    req.return.items.forEach((item) => {
      /*
      quantitySubstructFromStock.push(new Promise((resolve, reject) => {
        new Promise((resolved, rejected) => returnToStock(item, resolved, rejected))
          .then(() => resolve())
          .catch(err => reject(err));
      }));
      quantitySubstructFromSale.push(new Promise((resolve, reject) => {
        models.SaleItem.update({
          quantity: Number.parseFloat(item.quantity) - Number.parseFloat(item.returnQuantity),
        }, { where: { id: item.id } })
          .then(() => resolve())
          .catch(err => reject(err));
      }));
      priceSubstructFromSale.push(new Promise((resolve, reject) => {
        models.SaleItem.findAll({
          where: { id: item.id },
          include: [
            {
              model: models.Price,
              as: 'price',
            },
          ],
        }).then(([itemSale]) => {
          const [commissionPrice,
            commissionPriceUsd] = substructBalance(req.return, item, itemSale);
          models.SaleItem.update({
            commissionPrice,
            commissionPriceUsd,
            debtPrice: itemSale.debtPrice === 0
              ? 0 : getItemPrice(item, itemSale.price, req.return),
          }, { where: { id: item.id } })
            .then(() => resolve())
            .catch(err => reject(err));
        })
          .catch(err => reject(err));
      }));
    });
    priceAddToClientBalance.push(new Promise((resolve, reject) => {
      models.Client.findByPk(req.return.clientId)
        .then((client) => {
          models.Client.update({
            balance: Number.parseFloat(client.balance) + Number.parseFloat(req.totalPrice),
          }, { where: { id: client.id } })
            .then(() => resolve())
            .catch(err => reject(err));
        });
    }));*/
    Promise.all(
      quantitySubstructFromStock
        .concat(quantitySubstructFromSale)
        .concat(priceSubstructFromSale)
        .concat(priceAddToClientBalance),
    )
      .then(() => { cvy  b
      // Code above working fine. Database is not updated
      // and created ReturnItem and modified ReturnClient
      // Check these two modules and start editing here.
        models.ReturnClient.create(req.return)
          .then((returnItem) => {
            req.return.items.forEach((item) => {
              allReturnItems.push(new Promise((resolve, reject) => {
                // eslint-disable-next-line no-param-reassign
                models.ReturnItem.create({
                  returnClientId: returnItem.id,
                  stockId: item.stockId,
                  priceId: item.priceId,
                  quantity: item.returnQuantity,
                  discount: item.discount,
                  commissionPrice: item.commissionPrice || 0,
                  commissionPriceUsd: item.commissionPriceUsd || 0,
                })
                  .then(() => resolve())
                  .catch(error => reject(error));
              }));
            });
            Promise.all(allReturnItems)
              .then(() => res.send(200))
              .catch((error) => { res.status(502).json(error); });
          }).catch(err => res.status(404).json({ err }));
      })
      .catch((error) => { res.status(502).json(error); });
  },

};
