module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Losts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    warehouseId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Warehouses',
        key: 'id',
      },
    },
    stockId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Stocks',
        key: 'id',
      },
    },
    quantity: {
      type: Sequelize.DOUBLE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Losts'),
};
