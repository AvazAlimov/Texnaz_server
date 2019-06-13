module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Purposes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    number: {
      type: Sequelize.INTEGER,
      unique: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Purposes'),
};
