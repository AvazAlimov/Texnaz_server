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

  {
    id: 5,
    name: 'Руслан Нусеров',
    username: 'nuserov',
    password: bcrypt.hashSync('nuserov', 10),
  },
  {
    id: 6,
    name: 'Курбан',
    username: 'kurban',
    password: bcrypt.hashSync('kurban', 10),
  },
  {
    id: 7,
    name: 'Даврон',
    username: 'davron',
    password: bcrypt.hashSync('davron', 10),
  },
  {
    id: 8,
    name: 'Рафик',
    username: 'rafik',
    password: bcrypt.hashSync('rafik', 10),
  },
  {
    id: 9,
    name: 'Дониер',
    username: 'doniyor',
    password: bcrypt.hashSync('doniyor', 10),
  },
  {
    id: 10,
    name: 'Санжар',
    username: 'sanjar',
    password: bcrypt.hashSync('sanjar', 10),
  },
  {
    id: 11,
    name: 'Рустам',
    username: 'rustam',
    password: bcrypt.hashSync('rustam', 10),
  },
  {
    id: 12,
    name: 'Ахматхужа',
    username: 'ahmatxuja',
    password: bcrypt.hashSync('ahmatxuja', 10),
  },
  {
    id: 13,
    name: 'Наиля',
    username: 'nailya',
    password: bcrypt.hashSync('nailya', 10),
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
