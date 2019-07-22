module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('MixRangeBrands', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    rangeId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'MixRanges',
        key: 'id',
      },
    },
    brandId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Brands',
        key: 'id',
      },
    },
    percentage: {
      type: Sequelize.DOUBLE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('MixRangeBrands'),
};
