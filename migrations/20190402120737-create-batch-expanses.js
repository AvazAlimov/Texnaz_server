module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BatchExpanses', {
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
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    is_transport: {
      type: Sequelize.BOOLEAN,
    },
    is_cash: {
      type: Sequelize.BOOLEAN,
    },
    batchId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Batches',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('BatchExpanses'),
};
