const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    id: 1,
    username: 'ceo',
    password: bcrypt.hashSync('ceo', 10),
  },
  {
    id: 2,
    username: 'manager',
    password: bcrypt.hashSync('manager', 10),
  },
  {
    id: 3,
    username: 'accountant',
    password: bcrypt.hashSync('accountant', 10),
  },
  {
    id: 4,
    username: 'seller',
    password: bcrypt.hashSync('seller', 10),
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
