export default (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    type: DataTypes.INTEGER,
    form: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    managerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
  }, {});
  Sale.associate = (models) => {
    Sale.belongsTo(models.Client, { as: 'client' });
    Sale.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Sale.belongsTo(models.User, { as: 'manager', foreignKey: 'managerId' });
    Sale.hasMany(models.SaleItem, { as: 'items' });
  };
  return Sale;
};
