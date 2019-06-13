module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('SaleItems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    saleId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Sales',
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
    priceId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Prices',
        key: 'id',
      },
    },
    quantity: {
      type: Sequelize.DOUBLE,
    },
    discount: {
      type: Sequelize.DOUBLE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('SaleItems'),
};
