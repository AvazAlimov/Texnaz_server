module.exports = (sequelize, DataTypes) => {
  const ReturnClient = sequelize.define('ReturnClient', {
    number: DataTypes.STRING,
    type: DataTypes.INTEGER,
    form: DataTypes.INTEGER,
    days: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    managerId: DataTypes.INTEGER,
    currentClientBalance: DataTypes.DOUBLE,
    userId: DataTypes.INTEGER,
    warehouseId: DataTypes.INTEGER,
    exchangeRate: DataTypes.STRING,
    officialRate: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, {});
  ReturnClient.associate = (models) => {
    ReturnClient.belongsTo(models.Client, { as: 'client' });
    ReturnClient.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    ReturnClient.belongsTo(models.User, { as: 'manager', foreignKey: 'managerId' });
    ReturnClient.belongsTo(models.Warehouse, { as: 'warehouse' });
    ReturnClient.hasMany(models.ReturnItem, { as: 'items' });
  };
  return ReturnClient;
};
