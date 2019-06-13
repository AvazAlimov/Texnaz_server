export default (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
  }, {});
  UserRole.associate = () => {};
  return UserRole;
};
