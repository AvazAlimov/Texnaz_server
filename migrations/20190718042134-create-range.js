module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Ranges', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    planId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Plans',
        key: 'id',
      },
    },
    percentage: {
      type: Sequelize.DOUBLE,
    },
    from: {
      type: Sequelize.DOUBLE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Ranges'),
};
