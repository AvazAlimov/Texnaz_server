export default (sequelize, DataTypes) => {
  const Move = sequelize.define('Move', {
    from: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
    stockId: DataTypes.INTEGER,
    newStockId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
  }, {});
  Move.associate = (models) => {
    Move.belongsTo(models.Stock, { as: 'stock' });
    Move.belongsTo(models.Warehouse, { as: 'From', foreignKey: 'from' });
    Move.belongsTo(models.Warehouse, { as: 'To', foreignKey: 'to' });
  };
  return Move;
};
