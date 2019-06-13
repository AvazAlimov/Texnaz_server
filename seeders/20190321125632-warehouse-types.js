module.exports = {
  up: queryInterface => queryInterface.bulkInsert('WarehouseTypes', [{
    name: 'Импортные товары',
  },
  {
    name: 'Местные товары',
  },
  {
    name: 'Общие',
  },
  {
    name: 'Другой',
  },
  {
    name: 'Склад клиента',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Warehouses', null, {}),
};
