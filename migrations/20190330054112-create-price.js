module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Prices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    productId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    firstPrice: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    mixPriceNonCash: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    mixPriceCash: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    secondPrice: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Prices'),
};
