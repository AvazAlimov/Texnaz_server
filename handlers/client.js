import models from '../models';

const parseUSD = ({ type, officialRate }, {
  quantity,
  commissionPrice,
  commissionPriceUsd,
  price,
}) => {
  switch (type) {
    case 1:
      return (price.firstPrice / officialRate) * quantity;
    case 3:
      return price.secondPrice * quantity;
    case 4:
      return commissionPrice / officialRate;
    case 5:
      return commissionPriceUsd;
    default:
      return 0;
  }
};

function compareDates(first, second) {
  return first.getFullYear() === second.getFullYear()
  && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
}

function salePrice(sale) {
  return sale.items.map(item => parseUSD(sale, item)).reduce((a, b) => a + b, 0);
}

// Expected
// [{
//  date,
//  price
// }]
function saleCalculation(sales) {
  const dates = sales.map(({ createdAt }) => new Date(createdAt));
  // eslint-disable-next-line max-len
  const uniqueDates = dates.filter((date, index) => dates.indexOf(dates.find(d => compareDates(date, d))) === index);
  return uniqueDates.map((date) => {
    const daySales = sales.filter(({ createdAt }) => compareDates(new Date(createdAt), date));
    const dayPrice = daySales.map(sale => salePrice(sale)).reduce((a, b) => a + b, 0);
    return {
      date,
      price: dayPrice,
    };
  });
}

function paymentCalculation(payments) {
  const dates = payments.map(({ createdAt }) => new Date(createdAt));
  // eslint-disable-next-line max-len
  const uniqueDates = dates.filter((date, index) => dates.indexOf(dates.find(d => compareDates(date, d))) === index);
  return uniqueDates.map((date) => {
    const dayPayments = payments.filter(({ createdAt }) => compareDates(createdAt, date));
    const dayPrice = dayPayments.map(({ ratio, sum }) => (ratio === 1 ? sum : (sum / ratio))).reduce((a, b) => a + b, 0);
    return {
      date,
      price: dayPrice,
    };
  });
}

function returnCalculation(returns) {
  const dates = returns.map(({ createdAt }) => new Date(createdAt));
  // eslint-disable-next-line max-len
  const uniqueDates = dates.filter((date, index) => dates.indexOf(dates.find(d => compareDates(date, d))) === index);
  return uniqueDates.map((date) => {
    const dayReturns = returns.filter(({ createdAt }) => compareDates(new Date(createdAt), date));
    const dayPrice = dayReturns.map(sale => salePrice(sale)).reduce((a, b) => a + b, 0);
    return {
      date,
      price: dayPrice,
    };
  });
}

function getData(clientId) {
  return new Promise(async (resolve, reject) => {
    try {
      const sales = await models.Sale.findAll({
        where: { clientId },
        order: [['createdAt', 'ASC']],
        include: [
          {
            model: models.SaleItem,
            as: 'items',
            include: [
              {
                model: models.Price,
                as: 'price',
              },
            ],
          },
        ],
      });

      const returns = await models.ReturnClient.findAll({
        where: { clientId },
        order: [['createdAt', 'ASC']],
        include: [
          {
            model: models.ReturnItem,
            as: 'items',
            include: [
              {
                model: models.Price,
                as: 'price',
              },
            ],
          },
        ],
      });

      const payments = await models.Payment.findAll({ where: { clientId }, order: [['createdAt', 'ASC']] });

      resolve([saleCalculation(sales), paymentCalculation(payments), returnCalculation(returns)]);
    } catch (e) {
      reject(e);
    }
  });
}

function clintDetails({ icc, from, to }) {
  return new Promise(async (res, rej) => {
    try {
      const result = [];
      const [client] = await models.Client.findAll({
        where: { icc },
        include: [{
          model: models.User,
          as: 'manager',
          include: [{
            model: models.Territory,
            as: 'territory',
          }],
        }],
      });

      const [sales, payments, returns] = await getData(client.id);

      for (let d = new Date(from); d <= (new Date(to)); d.setDate(d.getDate() + 1)) {
        const sale = sales.find(({ date }) => compareDates(date, d));
        const payment = payments.find(({ date }) => compareDates(date, d));
        const aReturn = returns.find(({ date }) => compareDates(date, d));
        if (sale || payment || aReturn) {
          result.push({
            date: d.toString(),
            clientName: client.name,
            icc: client.icc,
            managerName: client.manager.name,
            territoryName: client.manager.territory.name,
            salePrice: sale ? sale.price : 0,
            paymentPrice: payment ? payment.price : 0,
            returnPrice: aReturn ? aReturn.price : 0,
          });
        }
      }

      res(result);
    } catch (e) {
      rej(e);
    }
  });
}

export { clintDetails as default };
