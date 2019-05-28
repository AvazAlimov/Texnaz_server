export default (sequelize, DataTypes) => {
  const ExpanseForm = sequelize.define('ExpanseForm', {
    name: DataTypes.STRING,
  }, {});
  ExpanseForm.associate = () => {};
  return ExpanseForm;
};
