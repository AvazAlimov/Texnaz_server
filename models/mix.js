export default (sequelize, DataTypes) => {
  const Mix = sequelize.define('Mix', {
    managerId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    min: DataTypes.DOUBLE,
  }, {});
  Mix.associate = (models) => {
    Mix.belongsTo(models.User, { as: 'manager' });
    Mix.hasMany(models.MixRange, { as: 'ranges', onDelete: 'cascade' });
  };
  return Mix;
};
