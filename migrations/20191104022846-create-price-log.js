

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PriceLogs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    priceId: {
      type: Sequelize.INTEGER,
    },
    productId: {
      type: Sequelize.INTEGER,
    },
    quantityBefore: {
      type: Sequelize.INTEGER,
    },
    quantityAfter: {
      type: Sequelize.INTEGER,
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
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('PriceLogs'),
};
