

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Rates', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    marketRate: {
      type: Sequelize.STRING,
    },
    exchangeRate: {
      type: Sequelize.STRING,
    },
    officialRate: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('rates'),
};
