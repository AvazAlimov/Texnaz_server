module.exports = (sequelize, DataTypes) => {
  const ReturnClient = sequelize.define('ReturnClient', {
    saleId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  ReturnClient.associate = (models) => {
    ReturnClient.belongsTo(models.Sale, { as: 'sale', foreignKey: 'saleId' });
  };
  return ReturnClient;
};
