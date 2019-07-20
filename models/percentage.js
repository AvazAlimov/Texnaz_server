export default (sequelize, DataTypes) => {
  const Percentage = sequelize.define('Percentage', {
    managerId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    min: DataTypes.DOUBLE,
    createdAt: DataTypes.DATE,
  }, {});
  Percentage.associate = (models) => {
    Percentage.belongsTo(models.User, { as: 'manager' });
    Percentage.hasMany(models.PercentageBrands, { as: 'brands' });
  };
  return Percentage;
};
