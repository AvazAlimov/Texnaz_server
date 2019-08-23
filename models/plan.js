export default (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    managerId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    method: DataTypes.INTEGER,
    provinceId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    allBrands: DataTypes.BOOLEAN,
    min: DataTypes.DOUBLE,
    createdAt: DataTypes.DATE,
  }, {});
  Plan.associate = (models) => {
    Plan.belongsTo(models.User, { as: 'manager' });
    Plan.belongsTo(models.Province, { as: 'province', foreignKey: 'provinceId' });
    Plan.hasMany(models.PlanBrands, { as: 'brands' });
    Plan.hasMany(models.Range, { as: 'ranges' });
  };
  return Plan;
};
