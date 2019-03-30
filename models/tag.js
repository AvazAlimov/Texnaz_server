export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
  }, {});
  Tag.associate = (models) => {
    Tag.belongsToMany(models.Product, { as: 'products', through: 'ProductTag', foreignKey: 'tag' });
  };
  return Tag;
};
