
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ReturnClients', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    days: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    number: {
      type: Sequelize.STRING,
    },
    currentClientBalance: {
      type: Sequelize.DOUBLE,
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
    warehouseId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Warehouses',
        key: 'id',
      },
    },
    exchangeRate: {
      type: Sequelize.STRING,
    },
    officialRate: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ReturnClients'),
};
