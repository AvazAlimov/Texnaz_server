
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ReturnItems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    returnClientId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'ReturnClients',
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
    commissionPrice: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
    commissionPriceUsd: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ReturnItems'),
};
