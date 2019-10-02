export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    controllerId: DataTypes.STRING,
    territoryId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  User.associate = (models) => {
    User.belongsTo(models.User, { as: 'controller', foreignKey: 'controllerId' });
    User.belongsToMany(models.Role, { as: 'roles', through: 'UserRoles', foreignKey: 'userId' });
    User.belongsTo(models.Territory, { as: 'territory', foreignKey: 'territoryId' });
    User.hasMany(models.UserProvince, { as: 'provinces' });
  };
  return User;
};
