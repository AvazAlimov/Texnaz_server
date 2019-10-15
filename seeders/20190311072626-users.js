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
    ]
    // #endregion

    // All users
      .concat([
        {
          id: 40,
          name: 'Альфия Замалетдинова',
          username: 'a.zamaletdinova',
          territoryId: 1,
          controllerId: 35,
        },
        {
          id: 35,
          name: 'Супервайзер Центр',
          username: 'supcentre',
          territoryId: 1,
          controllerId: 22,
        },
        {
          id: 22,
          name: 'Анвар Ирсалиев',
          username: 'a.irsaliyev',
          territoryId: 1,
        },
        {
          id: 26,
          name: 'Артем Фарманов',
          username: 'a.farmanov',
          territoryId: 3,
        },
        {
          id: 36,
          name: 'Даврон Абдуллаев',
          username: 'd.abdullayev',
          territoryId: 1,
          controllerId: 35,
        },
        {
          id: 39,
          name: 'Ильдар Газизов',
          username: 'i.gazizov',
          territoryId: 1,
          controllerId: 35,
        },
        {
          id: 24,
          name: 'Курбан Мирзаев',
          username: 'k.mirzayev',
          territoryId: 2,
        },
        {
          id: 41,
          name: 'Наиля Сили',
          username: 'n.sili',
          territoryId: 1,
          controllerId: 35,
        },
        {
          id: 42,
          name: 'Нармина Наджафалиева',
          username: 'n.nadjafaliyeva',
          territoryId: 1,
          controllerId: 35,
        },
        {
          id: 38,
          name: 'Рустам Нусеров',
          username: 'r.nuserov',
          territoryId: 1,
          controllerId: 35,
        },
        {
          id: 25,
          name: 'Санжар Джураев',
          username: 's.jurayev',
          territoryId: 4,
        },
        {
          id: 29,
          name: 'Супервайзер Анд и Нам',
          username: 'supanreg',
          territoryId: 2,
          controllerId: 24,
        },
        {
          id: 33,
          name: 'Супервайзер Каш, Сур и Ден',
          username: 'supksdreg',
          territoryId: 4,
          controllerId: 25,
        },
        {
          id: 32,
          name: 'Супервайзер Нав и Бух',
          username: 'supnbreg',
          territoryId: 3,
          controllerId: 26,
        },
        {
          id: 31,
          name: 'Супервайзер Сыр, Джиз и Сам',
          username: 'supsdsreg',
          territoryId: 3,
          controllerId: 26,
        },
        {
          id: 30,
          name: 'Супервайзер Фер и Кок',
          username: 'supfkreg',
          territoryId: 2,
          controllerId: 24,
        },
        {
          id: 34,
          name: 'Супервайзер Хор и Кар',
          username: 'supxkreg',
          territoryId: 4,
          controllerId: 25,
        },
        {
          id: 37,
          name: 'Хусан Аракулов',
          username: 'x.arakulov',
          territoryId: 1,
          controllerId: 35,
        },
      ]),
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
