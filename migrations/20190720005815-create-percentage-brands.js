module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PercentageBrands', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    percentageId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Percentages',
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
  down: queryInterface => queryInterface.dropTable('PercentageBrands'),
};
