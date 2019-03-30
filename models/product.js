module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    packing: DataTypes.DOUBLE,
    color: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    brand: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    purpose: DataTypes.INTEGER,
    tag: DataTypes.INTEGER,
    cleaning: DataTypes.DOUBLE,
    vat: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    excise: DataTypes.DOUBLE,
  }, {});
  Product.associate = (models) => {
    Product.hasOne(models.Unit, { foreignKey: 'id' });
    Product.hasOne(models.Type, { foreignKey: 'id' });
    Product.hasOne(models.Purpose, { foreignKey: 'id' });
  };
  return Product;
};
