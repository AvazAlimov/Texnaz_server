export default (sequelize, DataTypes) => {
  const Warehouse = sequelize.define('Warehouse', {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    owner: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
  }, {});
  Warehouse.associate = () => {};
  return Warehouse;
};
