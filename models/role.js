export default (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
  }, {});
  Role.associate = (models) => {
    Role.belongsToMany(models.User, { as: 'users', through: 'UserRoles', foreignKey: 'roleId' });
    Role.belongsToMany(models.Permission, { as: 'permissions', through: 'RolePermissions', foreignKey: 'roleId' });
  };
  return Role;
};
