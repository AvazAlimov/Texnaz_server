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
    contactPerson: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    regionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Regions',
        key: 'id',
      },
    },
    sphere: {
      type: Sequelize.STRING,
    },
    managerId: {
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
