export default (sequelize, DataTypes) => {
  const BatchExpanses = sequelize.define('BatchExpanses', {
    name: DataTypes.STRING,
    value: DataTypes.DOUBLE,
    is_transport: DataTypes.BOOLEAN,
    is_cash: DataTypes.BOOLEAN,
    batchId: DataTypes.INTEGER,
  }, {});
  BatchExpanses.associate = () => {};
  return BatchExpanses;
};
