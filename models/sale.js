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
    shipped: DataTypes.INTEGER,
    days: DataTypes.INTEGER,
    provinceId: DataTypes.INTEGER,
    officialRate: DataTypes.STRING,
    exchangeRate: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, {});
  Sale.associate = (models) => {
    Sale.belongsTo(models.Client, { as: 'client' });
    Sale.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Sale.belongsTo(models.User, { as: 'manager', foreignKey: 'managerId' });
    Sale.belongsTo(models.Warehouse, { as: 'warehouse' });
    Sale.belongsTo(models.Province, { as: 'province', foreignKey: 'provinceId' });
    Sale.hasMany(models.SaleItem, { as: 'items' });
  };
  return Sale;
};
