module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PlanBrands', {
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
    brandId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Brands',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('PlanBrands'),
};
