module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Batches', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    number: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    weight: {
      type: Sequelize.DOUBLE,
    },
    date: {
      type: Sequelize.DATE,
    },
    transport_cash: {
      type: Sequelize.DOUBLE,
    },
    transport_non_cash: {
      type: Sequelize.DOUBLE,
    },
    warehouse: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Warehouses',
        key: 'id',
      },
    },
    local: {
      type: Sequelize.BOOLEAN,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Batches'),
};
