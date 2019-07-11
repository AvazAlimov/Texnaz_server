module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Payments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    number: {
      type: Sequelize.STRING,
    },
    approved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    ratio: {
      type: Sequelize.DOUBLE,
    },
    sum: {
      type: Sequelize.DOUBLE,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    managerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    clientId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Clients',
        key: 'id',
      },
    },
    brandId: {
      allowNull: true,
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
  down: queryInterface => queryInterface.dropTable('Payments'),
};
