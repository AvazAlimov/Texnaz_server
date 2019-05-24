export default (sequelize, DataTypes) => {
  const Model = sequelize.define('Move', {
    from: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
    stockId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
  }, {});
  Model.associate = () => {};
  return Model;
};
