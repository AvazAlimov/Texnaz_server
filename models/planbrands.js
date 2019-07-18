export default (sequelize, DataTypes) => {
  const PlanBrands = sequelize.define('PlanBrands', {
    plandId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
  }, {});
  PlanBrands.associate = () => {};
  return PlanBrands;
};
