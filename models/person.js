export default (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: DataTypes.STRING,
  }, {});
  Person.associate = () => {};
  return Person;
};
