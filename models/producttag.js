export default (sequelize, DataTypes) => {
  const ProductTag = sequelize.define('ProductTag', {
    product: DataTypes.INTEGER,
    tag: DataTypes.INTEGER,
  }, {});
  ProductTag.associate = () => {};
  return ProductTag;
};
