export default (sequelize, DataTypes) => {
  const Configuration = sequelize.define('Configuration', {
    name: DataTypes.STRING,
    value: DataTypes.STRING,
  }, {});
  Configuration.associate = () => {};
  return Configuration;
};
