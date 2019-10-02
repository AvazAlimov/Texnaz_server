export default (sequelize, DataTypes) => {
  const WarehouseType = sequelize.define('WarehouseType', {
    name: DataTypes.STRING,
  }, {});
  WarehouseType.associate = () => {};
  return WarehouseType;
};
