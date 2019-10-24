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
    paidPrice: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
    debtPrice: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
    quantity: {
      type: Sequelize.DOUBLE,
    },
    discount: {
      type: Sequelize.DOUBLE,
    },
    commissionPrice: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
    commissionPriceUsd: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
  }),
  down: queryInterface => queryInterface.dropTable('SaleItems'),
};
