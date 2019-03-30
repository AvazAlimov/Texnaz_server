module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define('Price', {
    product: DataTypes.DOUBLE,
    non_cash: DataTypes.DOUBLE,
    mix_non_cash: DataTypes.DOUBLE,
    mix_cash: DataTypes.DOUBLE,
    cash: DataTypes.DOUBLE,
  }, {});
  Price.associate = () => {};
  return Price;
};
