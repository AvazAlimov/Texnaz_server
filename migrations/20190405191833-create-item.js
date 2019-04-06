module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    batchId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Batches',
        key: 'id',
      },
    },
    quantity: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    contract_price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    customs_price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    excise: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    tax: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    vat: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    cleaning: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    cash_profitability: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    income_tax: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Items'),
};
