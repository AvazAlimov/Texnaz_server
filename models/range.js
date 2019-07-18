export default (sequelize, DataTypes) => {
  const Range = sequelize.define('Range', {
    planId: DataTypes.INTEGER,
    percentage: DataTypes.DOUBLE,
    from: DataTypes.DOUBLE,
  }, {});
  Range.associate = (models) => {
    Range.belongsTo(models.Plan, { as: 'plan' });
  };
  return Range;
};
