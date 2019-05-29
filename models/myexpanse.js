export default (sequelize, DataTypes) => {
  const MyExpanse = sequelize.define('MyExpanse', {
    value: DataTypes.DOUBLE,
    formId: DataTypes.INTEGER,
    purposeId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    personId: DataTypes.INTEGER,
  }, {});
  MyExpanse.associate = (models) => {
    MyExpanse.belongsTo(models.ExpanseType, { as: 'type' });
    MyExpanse.belongsTo(models.ExpanseForm, { as: 'form' });
    MyExpanse.belongsTo(models.ExpansePurpose, { as: 'purpose' });
    MyExpanse.belongsTo(models.Person, { as: 'person' });
  };
  return MyExpanse;
};
