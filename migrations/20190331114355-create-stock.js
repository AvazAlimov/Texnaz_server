module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Stocks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    arrival_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    expiry_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    defected: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    warehouseId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Stocks'),
};
