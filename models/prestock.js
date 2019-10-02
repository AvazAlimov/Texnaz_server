export default (sequelize, DataTypes) => {
  const PreStock = sequelize.define('PreStock', {
    productId: DataTypes.INTEGER,
    warehouseId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
  }, {});
  PreStock.associate = (models) => {
    PreStock.belongsTo(models.Product, { as: 'product' });
    PreStock.belongsTo(models.Warehouse, { as: 'warehouse' });
  };
  return PreStock;
};
