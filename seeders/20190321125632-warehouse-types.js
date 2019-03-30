module.exports = {
  up: queryInterface => queryInterface.bulkInsert('WarehouseTypes', [{
    name: 'Warehouse Type 1',
  },
  {
    name: 'Warehouse Type 2',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Warehouses', null, {}),
};
