export default (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    name: DataTypes.STRING,
  }, {});
  Permission.associate = () => {};
  return Permission;
};
