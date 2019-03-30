export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    packing: DataTypes.DOUBLE,
    color: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    brand: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    purpose: DataTypes.INTEGER,
    cleaning: DataTypes.DOUBLE,
    vat: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    excise: DataTypes.DOUBLE,
  }, {});
  Product.associate = (models) => {
    Product.hasOne(models.Unit, { foreignKey: 'id' });
    Product.hasOne(models.ProductType, { foreignKey: 'id' });
    Product.hasOne(models.Brand, { foreignKey: 'id' });
    Product.hasOne(models.Purpose, { foreignKey: 'id' });
    Product.belongsToMany(models.Tag, { as: 'tags', through: 'ProductTag', foreignKey: 'product' });
  };
  return Product;
};
