module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Expanses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.DOUBLE,
    },
    is_transport: {
      type: Sequelize.BOOLEAN,
    },
    is_cash: {
      type: Sequelize.BOOLEAN,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Expanses'),
};
