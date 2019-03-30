export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  User.associate = (models) => {
    User.belongsToMany(models.Role, { as: 'roles', through: 'UserRoles', foreignKey: 'userId' });
  };
  return User;
};
