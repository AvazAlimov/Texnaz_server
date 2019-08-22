export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    provinceId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  User.associate = (models) => {
    User.belongsToMany(models.Role, { as: 'roles', through: 'UserRoles', foreignKey: 'userId' });
    User.belongsTo(models.Province, { as: 'province', foreignKey: 'provinceId' });
  };
  return User;
};
