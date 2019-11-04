
module.exports = (sequelize, DataTypes) => {
  const PriceLog = sequelize.define('PriceLog', {
    priceId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantityBefore: DataTypes.INTEGER,
    quantityAfter: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  PriceLog.associate = (models) => {
    PriceLog.belongsTo(models.Price, { as: 'price' });
    PriceLog.belongsTo(models.Product, { as: 'product' });
  };
  return PriceLog;
};
