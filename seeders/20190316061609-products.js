module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Products', [{
    name: 'Product 1',
    code: 'code 1',
    packing: 50,
    color: 'Red',
    ratio: null,
    unit: 1,
    type: 1,
    purpose: 1,
    tag: 1,
    profit: 20,
    cleaning: 30,
    vat: 15,
    tax: 10,
    excise: 5,
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Products', null, {}),
};
