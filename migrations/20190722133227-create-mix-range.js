module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('MixRanges', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    from: {
      type: Sequelize.DOUBLE,
    },
    mixId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Mixes',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('MixRanges'),
};
