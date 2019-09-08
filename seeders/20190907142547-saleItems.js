module.exports = {
  up: queryInterface => queryInterface.bulkInsert('SaleItems', [
    {
      saleId: 1,
      stockId: 2,
      priceId: 1,
      paidPrice: 0,
      debtPrice: 1115000,
      quantity: 10,
      discount: 0,
      commissionPrice: 111500,
    },
    {
      saleId: 1,
      stockId: 3,
      priceId: 2,
      paidPrice: 0,
      debtPrice: 4236000,
      quantity: 10,
      discount: 0,
      commissionPrice: 423600,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('SaleItems', null, {}),
};
