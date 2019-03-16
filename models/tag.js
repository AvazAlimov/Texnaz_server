export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
  }, {});
  Tag.associate = () => {};
  return Tag;
};
