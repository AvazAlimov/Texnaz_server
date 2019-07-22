export default (sequelize, DataTypes) => {
  const MixRange = sequelize.define('MixRange', {
    from: DataTypes.DOUBLE,
    mixId: DataTypes.INTEGER,
  }, {});
  MixRange.associate = (models) => {
    MixRange.belongsTo(models.Mix, { as: 'mix' });
  };
  return MixRange;
};
