export default (sequelize, DataTypes) => {
  const PercentageBrands = sequelize.define('PercentageBrands', {
    percentageId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    percentage: DataTypes.DOUBLE,
  }, {});
  PercentageBrands.associate = (models) => {
    PercentageBrands.belongsTo(models.Percentage);
  };
  return PercentageBrands;
};
