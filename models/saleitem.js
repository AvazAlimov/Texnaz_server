export default (sequelize, DataTypes) => {
  const SaleItem = sequelize.define('SaleItem', {
    saleId: DataTypes.INTEGER,
    stockId: DataTypes.INTEGER,
    price_id: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
  }, {});
  SaleItem.associate = () => {};
  return SaleItem;
};
