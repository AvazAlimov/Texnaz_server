export default (sequelize, DataTypes) => {
  const MixRangeBrands = sequelize.define('MixRangeBrands', {
    rangeId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    percentage: DataTypes.DOUBLE,
  }, {});
  MixRangeBrands.associate = (models) => {
    MixRangeBrands.belongsTo(models.MixRange, { as: 'mixRange', foreignKey: 'rangeId' });
    MixRangeBrands.belongsTo(models.Brand, { as: 'brand' });
  };
  return MixRangeBrands;
};
