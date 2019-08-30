

module.exports = (sequelize, DataTypes) => {
  const Territory = sequelize.define('Territory', {
    name: DataTypes.STRING,
  }, {});
  Territory.associate = (models) => {
    Territory.hasMany(models.Province, { as: 'provinces' });
  };
  return Territory;
};
