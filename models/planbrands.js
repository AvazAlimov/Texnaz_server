export default (sequelize, DataTypes) => {
  const PlanBrands = sequelize.define('PlanBrands', {
    planId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
  }, {});
  PlanBrands.associate = (models) => {
    PlanBrands.belongsTo(models.Plan, { as: 'plan' });
  };
  return PlanBrands;
};
