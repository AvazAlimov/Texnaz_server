module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ProductTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      unique: false,
    },
  }),
  down: queryInterface => queryInterface.dropTable('ProductTypes'),
};
