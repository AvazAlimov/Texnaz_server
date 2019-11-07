module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    number: {
      type: Sequelize.STRING,
      unique: true,
    },
    accepted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isClosed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    type: {
      type: Sequelize.INTEGER,
    },
    currentClientBalance: {
      type: Sequelize.DOUBLE,
    },
    form: {
      type: Sequelize.INTEGER,
    },
    provinceId: {
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
    approved: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    shipped: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    days: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    officialRate: {
      type: Sequelize.STRING,
      defaultValue: 1,
    },
    exchangeRate: {
      type: Sequelize.STRING,
      defaultValue: 1,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Sales'),
};
