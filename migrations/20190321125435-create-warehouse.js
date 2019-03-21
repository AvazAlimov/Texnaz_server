module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Warehouses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    owner: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    company: {
      type: Sequelize.STRING,
    },
    supply: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Supplies',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Warehouses'),
};
