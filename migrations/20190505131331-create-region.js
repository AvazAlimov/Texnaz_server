module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Regions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    provinceId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Provinces',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('Regions'),
};
