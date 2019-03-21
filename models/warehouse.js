export default (sequelize, DataTypes) => {
  const Warehouse = sequelize.define('Warehouse', {
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    address: DataTypes.STRING,
    company: DataTypes.STRING,
    supply: DataTypes.INTEGER,
  }, {});
  Warehouse.associate = () => {};
  return Warehouse;
};
