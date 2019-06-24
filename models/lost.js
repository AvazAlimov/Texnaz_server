export default (sequelize, DataTypes) => {
  const Lost = sequelize.define('Lost', {
    stockId: DataTypes.INTEGER,
    warehouseId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
  }, {});
  Lost.associate = (models) => {
    Lost.belongsTo(models.Stock, { as: 'stock' });
    Lost.belongsTo(models.Warehouse, { as: 'warehouse' });
  };
  return Lost;
};
