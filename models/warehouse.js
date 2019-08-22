export default (sequelize, DataTypes) => {
  const Warehouse = sequelize.define('Warehouse', {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    provinceId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
  }, {});
  Warehouse.associate = (models) => {
    Warehouse.belongsTo(models.Province, { as: 'province', foreignKey: 'provinceId' });
    Warehouse.belongsTo(models.User, { as: 'owner', foreignKey: 'ownerId' });
  };
  return Warehouse;
};
