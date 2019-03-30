export default (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
  }, {});
  Brand.associate = () => {};
  return Brand;
};
