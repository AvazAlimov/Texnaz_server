export default (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    icc: DataTypes.STRING,
    name: DataTypes.STRING,
    itn: DataTypes.STRING,
    contactPerson: DataTypes.STRING,
    phone: DataTypes.STRING,
    provinceId: DataTypes.INTEGER,
    regionId: DataTypes.INTEGER,
    sphere: DataTypes.STRING,
    managerId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  Client.associate = (models) => {
    Client.belongsTo(models.Province, { as: 'province' });
    Client.belongsTo(models.Region, { as: 'region' });
    Client.belongsTo(models.User, { as: 'manager' });
    Client.hasMany(models.Payment, { as: 'payments', foreignKey: 'clientId' });
  };
  return Client;
};
