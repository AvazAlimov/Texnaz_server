export default (sequelize, DataTypes) => {
  const ExpansePurpose = sequelize.define('ExpansePurpose', {
    name: DataTypes.STRING,
  }, {});
  ExpansePurpose.associate = () => {};
  return ExpansePurpose;
};
