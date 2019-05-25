module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Moves', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    from: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Warehouses',
        key: 'id',
      },
    },
    to: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Warehouses',
        key: 'id',
      },
    },
    stockId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Stocks',
        key: 'id',
      },
    },
    newStockId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Stocks',
        key: 'id',
      },
    },
    quantity: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Moves'),
};
