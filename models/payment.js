export default (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    approved: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    ratio: DataTypes.DOUBLE,
    managerId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    sum: DataTypes.DOUBLE,
    createdAt: DataTypes.DATE,
  }, {});
  Payment.associate = (models) => {
    Payment.belongsTo(models.Brand, { as: 'brand' });
    Payment.belongsTo(models.Client, { as: 'client' });
    Payment.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Payment.belongsTo(models.User, { as: 'manager', foreignKey: 'managerId' });
  };
  return Payment;
};
