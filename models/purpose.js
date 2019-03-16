export default (sequelize, DataTypes) => {
  const Purpose = sequelize.define('Purpose', {
    number: DataTypes.INTEGER,
    description: DataTypes.STRING,
  }, {});
  Purpose.associate = () => {};
  return Purpose;
};
