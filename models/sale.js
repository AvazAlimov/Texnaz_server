export default (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    number: DataTypes.STRING,
    type: DataTypes.INTEGER,
    form: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    managerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    warehouseId: DataTypes.INTEGER,
    approved: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  Sale.associate = (models) => {
    Sale.belongsTo(models.Client, { as: 'client' });
    Sale.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Sale.belongsTo(models.User, { as: 'manager', foreignKey: 'managerId' });
    Sale.belongsTo(models.Warehouse, { as: 'warehouse' });
    Sale.hasMany(models.SaleItem, { as: 'items' });
  };
  return Sale;
};
