export default (sequelize, DataTypes) => {
  const Expanse = sequelize.define('Expanse', {
    name: DataTypes.STRING,
    is_transport: DataTypes.BOOLEAN,
    is_cash: DataTypes.BOOLEAN,
  }, {});
  Expanse.associate = () => {};
  return Expanse;
};
