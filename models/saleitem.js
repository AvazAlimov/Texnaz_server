export default (sequelize, DataTypes) => {
  const SaleItem = sequelize.define('SaleItem', {
    saleId: DataTypes.INTEGER,
    stockId: DataTypes.INTEGER,
    priceId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
  }, {});
  SaleItem.associate = (models) => {
    SaleItem.belongsTo(models.Price, { as: 'price' });
  };
  return SaleItem;
};
