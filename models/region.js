export default (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    name: DataTypes.STRING,
    provinceId: DataTypes.INTEGER,
  }, {});
  Region.associate = (models) => {
    Region.belongsTo(models.Province, { as: 'province' });
  };
  return Region;
};
