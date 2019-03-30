module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Prices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    product: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: true,
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
  }),
  down: queryInterface => queryInterface.dropTable('Prices'),
};
