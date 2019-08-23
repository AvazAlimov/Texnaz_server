module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Plans', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    managerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    provinceId: {
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.INTEGER,
    },
    method: {
      type: Sequelize.INTEGER,
    },
    start: {
      type: Sequelize.DATE,
    },
    end: {
      type: Sequelize.DATE,
    },
    total: {
      type: Sequelize.DOUBLE,
    },
    allBrands: {
      type: Sequelize.BOOLEAN,
    },
    min: {
      type: Sequelize.DOUBLE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Plans'),
};
