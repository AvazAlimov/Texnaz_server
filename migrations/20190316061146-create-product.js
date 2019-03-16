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
      allowNull: false,
      unique: true,
    },
    packing: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ratio: {
      type: Sequelize.STRING,
      allowNull: true,
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
        model: 'Types',
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
    tag: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Tags',
        key: 'id',
      },
    },
    profit: {
      type: Sequelize.DOUBLE,
      allowNull: false,
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

  down: queryInterface => queryInterface.dropTable('Products'),
};
