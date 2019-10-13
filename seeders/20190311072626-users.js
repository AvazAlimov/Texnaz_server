const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'Users',
    // #region Tashkent city
    [
      // #region CEO
      {
        id: 1,
        name: 'Steve Jobs',
        username: 'ceo',
        password: bcrypt.hashSync('ceo', 10),
      },
      // #endregion

      // #region Accountant
      {
        id: 3,
        name: 'John Nash',
        username: 'accountant',
        password: bcrypt.hashSync('accountant', 10),
      },
      // #endregion

      // #region Owner
      {
        id: 4,
        name: 'John Sculley',
        username: 'owner',
        password: bcrypt.hashSync('owner', 10),
      },
      // #endregion

      // #region Operator
      {
        id: 5,
        name: 'Operator',
        username: 'operator',
        password: bcrypt.hashSync('operator', 10),
      },
      // #endregion

      // #region Sales Manager
      {
        id: 6,
        name: 'Sales Manager',
        username: 'sales',
        password: bcrypt.hashSync('sales', 10),
      },
      // #endregion

      // #region Managers
      {
        id: 2,
        name: 'Steve Wozniack',
        username: 'manager',
        password: bcrypt.hashSync('manager', 10),
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
      // #endregion
    ]
    // #endregion

    // #region Territory 2
      .concat([
        // #region CEO
        {
          id: 18,
          name: 'CEO Territory 2',
          username: 'ct2',
          territoryId: 2,
          password: bcrypt.hashSync('ct2', 10),
        },
        // #endregion

        // #region Supervisors
        {
          id: 19,
          name: 'Suppervisor 1 Territory 2',
          username: 's1t2',
          controllerId: 18,
          territoryId: 2,
          password: bcrypt.hashSync('s1t2', 10),
        },
        {
          id: 20,
          name: 'Suppervisor 2 Territory 2',
          username: 's2t2',
          controllerId: 18,
          territoryId: 2,
          password: bcrypt.hashSync('s2t2', 10),
        },
        // #endregion

        // #region Managers
        {
          id: 21,
          name: 'Manager 1 of suppervisor 1 territory 2',
          username: 'm1s1t2',
          controllerId: 19,
          territoryId: 2,
          password: bcrypt.hashSync('m1s1t2', 10),
        },
        {
          id: 22,
          name: 'Manager 2 of suppervisor 1 territory 2',
          username: 'm2s1t2',
          controllerId: 19,
          territoryId: 2,
          password: bcrypt.hashSync('m2s1t2', 10),
        },
        {
          id: 23,
          name: 'Manager 1 of suppervisor 2 territory 2',
          username: 'm1s2t2',
          controllerId: 20,
          territoryId: 2,
          password: bcrypt.hashSync('m1s2t2', 10),
        },
        {
          id: 24,
          name: 'Manager 2 of suppervisor 2 territory 2',
          username: 'm2s2t2',
          controllerId: 20,
          territoryId: 2,
          password: bcrypt.hashSync('m2s2t2', 10),
        },
        // #endregion
      ]),
    // #endregion
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
