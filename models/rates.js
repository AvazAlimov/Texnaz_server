module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    userId: DataTypes.INTEGER,
    marketRate: DataTypes.STRING,
    exchangeRate: DataTypes.STRING,
    officialRate: DataTypes.STRING,
  }, {});
  Rate.associate = (models) => {
    Rate.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };
  return Rate;
};
