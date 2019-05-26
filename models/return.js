export default (sequelize, DataTypes) => {
  const Return = sequelize.define('Return', {
    stockId: DataTypes.INTEGER,
    from: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  Return.associate = (models) => {
    Return.belongsTo(models.Stock, { as: 'stock' });
    Return.belongsTo(models.Warehouse, { as: 'From', foreignKey: 'from' });
    Return.belongsTo(models.Warehouse, { as: 'To', foreignKey: 'to' });
  };
  return Return;
};
