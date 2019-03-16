export default (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    name: DataTypes.STRING,
  }, {});
  Permission.associate = (models) => {
    Permission.belongsToMany(models.Role, { as: 'roles', through: 'RolePermissions', foreignKey: 'permissionId' });
  };
  return Permission;
};
