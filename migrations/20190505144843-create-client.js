module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Clients', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    icc: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    itn: {
      type: Sequelize.STRING,
    },
    contact_person: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    region: {
      type: Sequelize.INTEGER,
    },
    sphere: {
      type: Sequelize.STRING,
    },
    manager: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('Clients'),
};
