export default (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    productId: DataTypes.INTEGER,
    batchId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    contract_price: DataTypes.DOUBLE,
    customs_price: DataTypes.DOUBLE,
  }, {});
  Item.associate = (models) => {
    Item.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' });
    Item.belongsTo(models.Batch, { as: 'batch', foreignKey: 'batchId' });
  };
  return Item;
};
