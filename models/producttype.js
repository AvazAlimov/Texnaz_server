export default (sequelize, DataTypes) => {
  const ProductType = sequelize.define('ProductType', {
    name: DataTypes.STRING,
  }, {});
  ProductType.associate = () => {};
  return ProductType;
};
