export default (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    icc: DataTypes.STRING,
    name: DataTypes.STRING,
    itn: DataTypes.STRING,
    contactPerson: DataTypes.STRING,
    phone: DataTypes.STRING,
    regionId: DataTypes.INTEGER,
    sphere: DataTypes.STRING,
    managerId: DataTypes.INTEGER,
  }, {});
  Client.associate = (models) => {
    Client.belongsTo(models.Region, { as: 'region' });
    Client.belongsTo(models.User, { as: 'manager' });
  };
  return Client;
};
