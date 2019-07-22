export default (sequelize, DataTypes) => {
  const MixRange = sequelize.define('MixRange', {
    from: DataTypes.DOUBLE,
    mixId: DataTypes.INTEGER,
  }, {});
  MixRange.associate = (models) => {
    MixRange.belongsTo(models.Mix, { as: 'mix' });
    MixRange.hasMany(models.MixRangeBrands, { as: 'brands', onDelete: 'cascade', foreignKey: 'rangeId' });
  };
  return MixRange;
};
