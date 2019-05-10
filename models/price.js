export default (sequelize, DataTypes) => {
  const Price = sequelize.define('Price', {
    productId: DataTypes.DOUBLE,
    firstPrice: DataTypes.DOUBLE,
    mixPriceNonCash: DataTypes.DOUBLE,
    mixPriceCash: DataTypes.DOUBLE,
    secondPrice: DataTypes.DOUBLE,
    createdAt: DataTypes.DATE,
  }, {});
  Price.associate = (models) => {
    Price.belongsTo(models.Product, { as: 'product' });
  };
  return Price;
};
