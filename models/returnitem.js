module.exports = (sequelize, DataTypes) => {
  const ReturnItem = sequelize.define('ReturnItem', {
    returnClientId: DataTypes.INTEGER,
    stockId: DataTypes.INTEGER,
    priceId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    discount: DataTypes.DOUBLE,
    commissionPrice: DataTypes.DOUBLE,
    commissionPriceUsd: DataTypes.DOUBLE,
    createdAt: DataTypes.DATE,
  }, {});
  ReturnItem.associate = (models) => {
    ReturnItem.belongsTo(models.Price, { as: 'price' });
    ReturnItem.belongsTo(models.Stock, { as: 'stock' });
    ReturnItem.belongsTo(models.ReturnClient, { as: 'returnClient' });
  };
  return ReturnItem;
};
