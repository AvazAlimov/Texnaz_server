export default (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    name: DataTypes.STRING,
  }, {});
  Unit.associate = () => {};
  return Unit;
};
