export default (sequelize, DataTypes) => {
  const Province = sequelize.define('Province', {
    name: DataTypes.STRING,
    territoryId: DataTypes.INTEGER,
  }, {});
  Province.associate = (models) => {
    Province.belongsTo(models.Territory, { as: 'territory', foreignKey: 'territory' });
  };
  return Province;
};
