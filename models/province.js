export default (sequelize, DataTypes) => {
  const Province = sequelize.define('Province', {
    name: DataTypes.STRING,
  }, {});
  Province.associate = () => {};
  return Province;
};
