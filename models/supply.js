export default (sequelize, DataTypes) => {
  const Supply = sequelize.define('Supply', {
    name: DataTypes.STRING,
  }, {});
  Supply.associate = () => {};
  return Supply;
};
