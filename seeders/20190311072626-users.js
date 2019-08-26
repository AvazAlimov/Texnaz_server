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
        provinceId: 12,
        password: bcrypt.hashSync('ceo', 10),
      },
      // #endregion

      // #region Accountant
      {
        id: 3,
        name: 'John Nash',
        username: 'accountant',
        provinceId: 12,
        password: bcrypt.hashSync('accountant', 10),
      },
      // #endregion

      // #region Owner
      {
        id: 4,
        name: 'John Sculley',
        username: 'owner',
        provinceId: 12,
        password: bcrypt.hashSync('owner', 10),
      },
      // #endregion

      // #region Operator
      {
        id: 5,
        name: 'Operator',
        username: 'operator',
        provinceId: 12,
        password: bcrypt.hashSync('operator', 10),
      },
      // #endregion

      // #region Sales Manager
      {
        id: 6,
        name: 'Sales Manager',
        username: 'sales',
        provinceId: 12,
        password: bcrypt.hashSync('sales', 10),
      },
      // #endregion

      // #region Managers
      {
        id: 2,
        name: 'Steve Wozniack',
        controllerId: 1,
        username: 'manager',
        provinceId: 12,
        password: bcrypt.hashSync('manager', 10),
      },
      {
        id: 7,
        name: 'Абдуллаев Д.',
        username: 'davron',
        provinceId: 12,
        password: bcrypt.hashSync('davron', 10),
      },
      {
        id: 8,
        name: 'Алтынбеков Р.',
        username: 'altinbekov',
        provinceId: 12,
        password: bcrypt.hashSync('altinbekov', 10),
      },
      {
        id: 9,
        name: 'Аракулов Д.',
        username: 'doniyor',
        provinceId: 12,
        password: bcrypt.hashSync('doniyor', 10),
      },
      {
        id: 10,
        name: 'Газизов И.',
        username: 'ildar',
        provinceId: 12,
        password: bcrypt.hashSync('ildar', 10),
      },
      {
        id: 11,
        name: 'Джураев С.',
        username: 'sanjar',
        provinceId: 12,
        password: bcrypt.hashSync('sanjar', 10),
      },
      {
        id: 12,
        name: 'Замалетдинова А.',
        username: 'alfiya',
        provinceId: 12,
        password: bcrypt.hashSync('alfiya', 10),
      },
      {
        id: 13,
        name: 'Мирзаев К.',
        username: 'kurbon',
        provinceId: 12,
        password: bcrypt.hashSync('kurbon', 10),
      },
      {
        id: 14,
        name: 'Нусеров Р.',
        username: 'nuserov',
        provinceId: 12,
        password: bcrypt.hashSync('nuserov', 10),
      },
      {
        id: 15,
        name: 'Нусеров Рустам.',
        username: 'rustam',
        provinceId: 12,
        password: bcrypt.hashSync('rustam', 10),
      },
      {
        id: 16,
        name: 'Орипов А.',
        username: 'ahmatxuja',
        provinceId: 12,
        password: bcrypt.hashSync('ahmatxuja', 10),
      },
      {
        id: 17,
        name: 'Сили Н.',
        username: 'nailya',
        provinceId: 12,
        password: bcrypt.hashSync('nailya', 10),
      },
      // #endregion
    ]
    // #endregion

    // #region Andijan
      .concat([

        // #region ceo
        {
          id: 18,
          name: 'Andijon CEO',
          username: 'ca',
          provinceId: 1,
          password: bcrypt.hashSync('ca', 10),
        },
        // #endregion

        // #region Supervisors
        {
          id: 19,
          name: 'Andijon Suppervisor 1',
          username: 'sa1',
          provinceId: 1,
          controllerId: 18,
          password: bcrypt.hashSync('sa1', 10),
        },
        {
          id: 20,
          name: 'Andijon Suppervisor 2',
          username: 'sa2',
          provinceId: 1,
          controllerId: 18,
          password: bcrypt.hashSync('sa2', 10),
        },
        // #endregion

        // #region Managers for Supervisor 1
        {
          id: 21,
          name: 'Andijon Manger 1',
          username: 'ma1',
          provinceId: 1,
          controllerId: 19,
          password: bcrypt.hashSync('ma1', 10),
        },
        {
          id: 22,
          name: 'Andijon Manager 2',
          username: 'ma2',
          provinceId: 1,
          controllerId: 19,
          password: bcrypt.hashSync('ma2', 10),
        },
        {
          id: 23,
          name: 'Andijon Manager 3',
          username: 'ma3',
          provinceId: 1,
          controllerId: 19,
          password: bcrypt.hashSync('ma3', 10),
        },
        // #endregion

        // #region Managers for Supervisor 2
        {
          id: 24,
          name: 'Andijon Manger 4',
          username: 'ma4',
          provinceId: 1,
          controllerId: 20,
          password: bcrypt.hashSync('ma4', 10),
        },
        {
          id: 25,
          name: 'Andijon Manager 5',
          username: 'ma5',
          provinceId: 1,
          controllerId: 20,
          password: bcrypt.hashSync('ma5', 10),
        },
        {
          id: 26,
          name: 'Andijon Manager 6',
          username: 'ma6',
          provinceId: 1,
          controllerId: 20,
          password: bcrypt.hashSync('ma6', 10),
        },
      // #endregion
      ])
    // #endregion

    // #region Samarkand
      .concat([
      // #region ceo
        {
          id: 27,
          name: 'Samarkand CEO',
          username: 'cs',
          provinceId: 9,
          password: bcrypt.hashSync('cs', 10),
        },
        // #endregion

        // #region Supervisors
        {
          id: 28,
          name: 'Samarkand Suppervisor 1',
          username: 'ss1',
          provinceId: 9,
          controllerId: 27,
          password: bcrypt.hashSync('ss1', 10),
        },
        {
          id: 29,
          name: 'Samarkand Suppervisor 2',
          username: 'ss2',
          provinceId: 9,
          controllerId: 27,
          password: bcrypt.hashSync('ss2', 10),
        },
        // #endregion

        // #region Managers for Supervisor 1
        {
          id: 30,
          name: 'Samarkand Manger 1',
          username: 'ms1',
          provinceId: 9,
          controllerId: 28,
          password: bcrypt.hashSync('ms1', 10),
        },
        {
          id: 31,
          name: 'Samarkand Manager 2',
          username: 'ms2',
          provinceId: 9,
          controllerId: 28,
          password: bcrypt.hashSync('ms2', 10),
        },
        {
          id: 32,
          name: 'Samarkand Manager 3',
          username: 'ms3',
          provinceId: 9,
          controllerId: 28,
          password: bcrypt.hashSync('ms3', 10),
        },
        // #endregion

        // #region Managers for Supervisor 2
        {
          id: 33,
          name: 'Samarkand Manger 4',
          username: 'ms4',
          provinceId: 9,
          controllerId: 29,
          password: bcrypt.hashSync('ms4', 10),
        },
        {
          id: 34,
          name: 'Samarkand Manager 5',
          username: 'ms5',
          provinceId: 9,
          controllerId: 29,
          password: bcrypt.hashSync('ms5', 10),
        },
        {
          id: 35,
          name: 'Samarkand Manager 6',
          username: 'ms6',
          provinceId: 9,
          controllerId: 29,
          password: bcrypt.hashSync('ms6', 10),
        },
      // #endregion
      ])
    // #endregion

    // #region Bukhara
      .concat([
        // #region ceo
        {
          id: 36,
          name: 'Bukhara CEO',
          username: 'cb',
          provinceId: 2,
          password: bcrypt.hashSync('cb', 10),
        },
        // #endregion

        // #region Supervisors
        {
          id: 37,
          name: 'Bukhara Suppervisor 1',
          username: 'sb1',
          provinceId: 2,
          controllerId: 36,
          password: bcrypt.hashSync('sb1', 10),
        },
        {
          id: 38,
          name: 'Bukhara Suppervisor 2',
          username: 'sb2',
          provinceId: 2,
          controllerId: 36,
          password: bcrypt.hashSync('sb2', 10),
        },
        // #endregion

        // #region Managers for Supervisor 1
        {
          id: 39,
          name: 'Bukhara Manger 1',
          username: 'mb1',
          provinceId: 2,
          controllerId: 37,
          password: bcrypt.hashSync('mb1', 10),
        },
        {
          id: 40,
          name: 'Bukhara Manager 2',
          username: 'mb2',
          provinceId: 2,
          controllerId: 37,
          password: bcrypt.hashSync('mb2', 10),
        },
        {
          id: 41,
          name: 'Bukhara Manager 3',
          username: 'mb3',
          provinceId: 2,
          controllerId: 37,
          password: bcrypt.hashSync('mb3', 10),
        },
        // #endregion

        // #region Managers for Supervisor 2
        {
          id: 42,
          name: 'Bukhara Manger 4',
          username: 'mb4',
          provinceId: 2,
          controllerId: 38,
          password: bcrypt.hashSync('mb4', 10),
        },
        {
          id: 43,
          name: 'Bukhara Manager 5',
          username: 'mb5',
          provinceId: 2,
          controllerId: 38,
          password: bcrypt.hashSync('mb5', 10),
        },
        {
          id: 44,
          name: 'Bukhara Manager 6',
          username: 'mb6',
          provinceId: 2,
          controllerId: 38,
          password: bcrypt.hashSync('mb6', 10),
        },
        // #endregion
      ]),
    // #endregion
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
