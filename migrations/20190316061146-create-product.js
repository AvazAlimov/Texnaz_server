module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    code: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    packing: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    brand: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Brands',
        key: 'id',
      },
    },
    unit: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Units',
        key: 'id',
      },
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'ProductTypes',
        key: 'id',
      },
    },
    purpose: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Purposes',
        key: 'id',
      },
    },
    cleaning: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    vat: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    tax: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    excise: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  }),

  down: queryInterface => queryInterface.dropTable('Products'),
};
