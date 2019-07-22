export default (sequelize, DataTypes) => {
  const MixRangeBrands = sequelize.define('MixRangeBrands', {
    rangeId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    percentage: DataTypes.DOUBLE,
  }, {});
  MixRangeBrands.associate = (models) => {
    MixRangeBrands.belongsTo(models.MixRanges, { as: 'mixRange' });
  };
  return MixRangeBrands;
};
