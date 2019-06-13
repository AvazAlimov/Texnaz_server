export default (sequelize, DataTypes) => {
  const ExpanseType = sequelize.define('ExpanseType', {
    name: DataTypes.STRING,
  }, {});
  ExpanseType.associate = () => {};
  return ExpanseType;
};
