

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('MyExpanses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    value: {
      type: Sequelize.DOUBLE,
    },
    formId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: 'ExpanseForms',
        key: 'id',
      },
    },
    purposeId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: 'ExpansePurposes',
        key: 'id',
      },
    },
    typeId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: 'ExpanseTypes',
        key: 'id',
      },
    },
    personId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: 'People',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('MyExpanses'),
};
