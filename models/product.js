module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    packing: DataTypes.INTEGER,
    color: DataTypes.STRING,
    ratio: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    purpose: DataTypes.INTEGER,
    tag: DataTypes.INTEGER,
    profit: DataTypes.DOUBLE,
    cleaning: DataTypes.DOUBLE,
    vat: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    excise: DataTypes.DOUBLE,
  }, {});
  Product.associate = () => {};
  return Product;
};
