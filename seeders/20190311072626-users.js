const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'Users',
    [
      {
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
        username: 'owner',
        password: bcrypt.hashSync('owner', 10),
      },
      {
        id: 5,
        name: 'Operator',
        username: 'operator',
        password: bcrypt.hashSync('operator', 10),
      },
      {
        id: 6,
        name: 'Sales Manager',
        username: 'sales',
        password: bcrypt.hashSync('sales', 10),
      },
      {
        id: 7,
        name: 'Абдуллаев Д.',
        username: 'davron',
        password: bcrypt.hashSync('davron', 10),
      },
      {
        id: 8,
        name: 'Алтынбеков Р.',
        username: 'altinbekov',
        password: bcrypt.hashSync('altinbekov', 10),
      },
      {
        id: 9,
        name: 'Аракулов Д.',
        username: 'doniyor',
        password: bcrypt.hashSync('doniyor', 10),
      },
      {
        id: 10,
        name: 'Газизов И.',
        username: 'ildar',
        password: bcrypt.hashSync('ildar', 10),
      },
      {
        id: 11,
        name: 'Джураев С.',
        username: 'sanjar',
        password: bcrypt.hashSync('sanjar', 10),
      },
      {
        id: 12,
        name: 'Замалетдинова А.',
        username: 'alfiya',
        password: bcrypt.hashSync('alfiya', 10),
      },
      {
        id: 13,
        name: 'Мирзаев К.',
        username: 'kurbon',
        password: bcrypt.hashSync('kurbon', 10),
      },
      {
        id: 14,
        name: 'Нусеров Р.',
        username: 'nuserov',
        password: bcrypt.hashSync('nuserov', 10),
      },
      {
        id: 15,
        name: 'Нусеров Рустам.',
        username: 'rustam',
        password: bcrypt.hashSync('rustam', 10),
      },
      {
        id: 16,
        name: 'Орипов А.',
        username: 'ahmatxuja',
        password: bcrypt.hashSync('ahmatxuja', 10),
      },
      {
        id: 17,
        name: 'Сили Н.',
        username: 'nailya',
        password: bcrypt.hashSync('nailya', 10),
      },
    ],
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
