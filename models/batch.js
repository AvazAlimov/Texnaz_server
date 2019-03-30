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
  }, {});
  Batch.associate = () => {};
  return Batch;
};
