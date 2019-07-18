export default (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    managerId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    method: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    allBrands: DataTypes.BOOLEAN,
    min: DataTypes.DOUBLE,
  }, {});
  Plan.associate = (models) => {
    Plan.belongsTo(models.User, { as: 'manager' });
    Plan.hasMany(models.PlanBrands, { as: 'brands' });
  };
  return Plan;
};
