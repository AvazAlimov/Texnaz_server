export default (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
  }, {});
  Brand.associate = () => {};
  return Brand;
};
