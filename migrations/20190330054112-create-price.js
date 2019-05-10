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
      unique: true,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    non_cash: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    mix_non_cash: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    mix_cash: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    cash: {
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
