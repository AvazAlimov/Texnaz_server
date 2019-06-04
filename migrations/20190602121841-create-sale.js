module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.INTEGER,
    },
    form: {
      type: Sequelize.INTEGER,
    },
    clientId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Clients',
        key: 'id',
      },
    },
    managerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        allowNull: true,
        model: 'Users',
        key: 'id',
      },
    },
    approved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Sales'),
};
