export default (sequelize, DataTypes) => {
  const MyExpanse = sequelize.define('MyExpanse', {
    userId: DataTypes.INTEGER,
    value: DataTypes.DOUBLE,
    formId: DataTypes.INTEGER,
    purposeId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    personId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  MyExpanse.associate = (models) => {
    MyExpanse.belongsTo(models.User, { as: 'user' });
    MyExpanse.belongsTo(models.ExpanseType, { as: 'type' });
    MyExpanse.belongsTo(models.ExpanseForm, { as: 'form' });
    MyExpanse.belongsTo(models.ExpansePurpose, { as: 'purpose' });
    MyExpanse.belongsTo(models.Person, { as: 'person' });
  };
  return MyExpanse;
};
