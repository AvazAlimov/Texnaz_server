export default (sequelize, DataTypes) => {
  const Mix = sequelize.define('Mix', {
    managerId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    provinceId: DataTypes.INTEGER,
    min: DataTypes.DOUBLE,
    createdAt: DataTypes.DATE,
  }, {});
  Mix.associate = (models) => {
    Mix.belongsTo(models.User, { as: 'manager' });
    Mix.belongsTo(models.Province, { as: 'province', foreignKey: 'provinceId' });
    Mix.hasMany(models.MixRange, { as: 'ranges', onDelete: 'cascade' });
  };
  return Mix;
};
