export default (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    userId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    method: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    allBrands: DataTypes.BOOLEAN,
    min: DataTypes.DOUBLE,
    createdAt: DataTypes.DATE,
  }, {});
  Plan.associate = (models) => {
    Plan.belongsTo(models.User, { as: 'user' });
    Plan.belongsTo(models.Role, { as: 'role' });
    Plan.hasMany(models.PlanBrands, { as: 'brands' });
    Plan.hasMany(models.Range, { as: 'ranges' });
  };
  return Plan;
};
