module.exports = (sequelize, DataTypes) => {
  const UserProvince = sequelize.define('UserProvince', {
    provinceId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  UserProvince.associate = (models) => {
    UserProvince.belongsTo(models.User, { as: 'user' });
    UserProvince.belongsTo(models.Province, { as: 'province' });
  };
  return UserProvince;
};
