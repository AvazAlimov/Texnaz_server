module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ProductTags', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    product: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    tag: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Tags',
        key: 'id',
      },
    },
  })
    .then(() => queryInterface.sequelize.query(
      'ALTER TABLE `ProductTags` ADD UNIQUE `product_tag`(`product`, `tag`)',
    )),
  down: queryInterface => queryInterface.dropTable('ProductTags'),
};
