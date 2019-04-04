export default (sequelize, DataTypes) => {
  const Batch = sequelize.define('Batch', {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    weight: DataTypes.DOUBLE,
    date: DataTypes.DATE,
    transport_cash: DataTypes.DOUBLE,
    transport_non_cash: DataTypes.DOUBLE,
    warehouse: DataTypes.INTEGER,
    local: DataTypes.BOOLEAN,

    total: DataTypes.DOUBLE,
    conversion: DataTypes.DOUBLE,
    bank_transfer: DataTypes.DOUBLE,
    market_rate: DataTypes.DOUBLE,
    official_rate: DataTypes.DOUBLE,
    exchange_rate: DataTypes.DOUBLE,
  }, {});
  Batch.associate = (models) => {
    Batch.hasMany(models.BatchExpanses, { as: 'expanses' });
    Batch.belongsTo(models.Warehouse, { as: 'Warehouse', foreignKey: 'warehouse' });
  };
  return Batch;
};
