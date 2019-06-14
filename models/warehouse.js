export default (sequelize, DataTypes) => {
  const Warehouse = sequelize.define('Warehouse', {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
  }, {});
  Warehouse.associate = (models) => {
    Warehouse.belongsTo(models.User, { as: 'owner', foreignKey: 'ownerId' });
  };
  return Warehouse;
};
