export default (sequelize, DataTypes) => {
  const PreStock = sequelize.define('PreStock', {
    productId: DataTypes.INTEGER,
    warehouseId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
  }, {});
  PreStock.associate = () => {};
  return PreStock;
};
