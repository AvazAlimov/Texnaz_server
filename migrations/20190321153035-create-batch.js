module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Batches', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: true,
    },
    weight: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    },
    transport_cash: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    transport_non_cash: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    total: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    conversion: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    bank_transfer: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    market_rate: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    official_rate: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    exchange_rate: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    warehouse: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Warehouses',
        key: 'id',
      },
    },
    local: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Batches'),
};
