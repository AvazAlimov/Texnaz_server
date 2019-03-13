export default (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
  }, {});
  Role.associate = () => {};
  return Role;
};
