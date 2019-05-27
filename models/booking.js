export default (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    stockId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    userId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    date: DataTypes.DATE,
  }, {});
  Booking.associate = (models) => {
    Booking.belongsTo(models.Stock, { as: 'stock' });
    Booking.belongsTo(models.Client, { as: 'client' });
    Booking.belongsTo(models.User, { as: 'user' });
  };
  return Booking;
};
