module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('WarehouseTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
  }),
  down: queryInterface => queryInterface.dropTable('WarehouseTypes'),
};
