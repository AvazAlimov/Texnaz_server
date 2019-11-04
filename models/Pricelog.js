
module.exports = (sequelize, DataTypes) => {
  const PriceLog = sequelize.define('PriceLog', {
    priceId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantityBefore: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    quantityAfter: DataTypes.INTEGER,
    exchangeRate: DataTypes.STRING,
    officialRate: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, {});
  PriceLog.associate = (models) => {
    PriceLog.belongsTo(models.Price, { as: 'price' });
    PriceLog.belongsTo(models.Product, { as: 'product' });
    PriceLog.belongsTo(models.User, { as: 'user' });
  };
  return PriceLog;
};
