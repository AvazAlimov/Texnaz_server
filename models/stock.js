export default (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    arrival_date: DataTypes.DATE,
    expiry_date: DataTypes.DATE,
    defected: DataTypes.BOOLEAN,
    warehouseId: DataTypes.INTEGER,
  }, {});
  Stock.associate = (models) => {
    Stock.belongsTo(models.Warehouse, { as: 'warehouse', foreignKey: 'warehouseId' });
    Stock.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' });
    Stock.hasMany(models.Booking, { as: 'bookings', foreignKey: 'stockId' });
    Stock.hasMany(models.SaleItem, { as: 'sales', foreignKey: 'stockId' });
  };
  return Stock;
};
