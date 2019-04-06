export default (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    productId: DataTypes.INTEGER,
    batchId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    contract_price: DataTypes.DOUBLE,
    customs_price: DataTypes.DOUBLE,
    excise: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    vat: DataTypes.DOUBLE,
    cleaning: DataTypes.DOUBLE,
    cash_profitability: DataTypes.DOUBLE,
    non_cash_profitability: DataTypes.DOUBLE,
    income_tax: DataTypes.DOUBLE,
  }, {});
  Item.associate = (models) => {
    Item.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' });
    Item.belongsTo(models.Batch, { as: 'batch', foreignKey: 'batchId' });
  };
  return Item;
};
