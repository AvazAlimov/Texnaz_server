module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ProductTags', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    product: {
      type: Sequelize.INTEGER,
    },
    tag: {
      type: Sequelize.INTEGER,
    },
  }),
  down: queryInterface => queryInterface.dropTable('ProductTags'),
};
