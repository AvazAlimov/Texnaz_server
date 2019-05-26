module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Returns', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    stockId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Stocks',
        key: 'id',
      },
    },
    from: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Warehouses',
        key: 'id',
      },
    },
    to: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Warehouses',
        key: 'id',
      },
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Returns'),
};
