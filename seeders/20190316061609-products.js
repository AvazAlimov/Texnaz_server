module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Products', [
    {
      name: 'Product 1',
      code: null,
      packing: 50,
      color: 'Red',
      unit: 1,
      type: 1,
      purpose: 1,
      tag: 1,
      cleaning: 30,
      vat: 15,
      tax: 10,
      excise: 5,
    },
    {
      name: 'Product 2',
      code: null,
      packing: 50,
      color: 'Red',
      unit: 1,
      type: 1,
      purpose: 1,
      tag: 1,
      cleaning: 30,
      vat: 15,
      tax: 10,
      excise: 5,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Products', null, {}),
};
