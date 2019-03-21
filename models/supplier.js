export default (sequelize, DataTypes) => {
  const Supplier = sequelize.define('Supplier', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
  }, {});
  Supplier.associate = () => {};
  return Supplier;
};
