export default (sequelize, DataTypes) => {
  const Mix = sequelize.define('Mix', {
    mangerId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    min: DataTypes.DOUBLE,
  }, {});
  Mix.associate = () => {};
  return Mix;
};
