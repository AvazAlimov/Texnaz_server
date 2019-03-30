const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    id: 1,
    name: 'Steve Jobs',
    username: 'ceo',
    password: bcrypt.hashSync('ceo', 10),
  },
  {
    id: 2,
    name: 'Steve Wozniack',
    username: 'manager',
    password: bcrypt.hashSync('manager', 10),
  },
  {
    id: 3,
    name: 'John Nash',
    username: 'accountant',
    password: bcrypt.hashSync('accountant', 10),
  },
  {
    id: 4,
    name: 'John Sculley',
    username: 'seller',
    password: bcrypt.hashSync('seller', 10),
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
