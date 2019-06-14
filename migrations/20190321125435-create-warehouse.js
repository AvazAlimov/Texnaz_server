module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Warehouses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    totalPrice: {
      type: Sequelize.DOUBLE
    },
    company: {
      type: Sequelize.STRING,
    },
    ownerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'WarehouseTypes',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('Warehouses'),
};
