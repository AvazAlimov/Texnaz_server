export default (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    icc: DataTypes.STRING,
    name: DataTypes.STRING,
    itn: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    phone: DataTypes.STRING,
    region: DataTypes.INTEGER,
    sphere: DataTypes.STRING,
    manager: DataTypes.INTEGER,
  }, {});
  Client.associate = () => {};
  return Client;
};
