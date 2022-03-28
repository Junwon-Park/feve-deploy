'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Category.hasMany(models.Product);
    }
  }
  Category.init(
    {
      CATEGORY_KEY: {
        type: DataTypes.BIGINT,
        primaryKey: true
      },
      CATEGORY_PARENT: DataTypes.STRING(3),
      CATEGORY_NAME: DataTypes.STRING(20),
      CATEGORY_DESC: DataTypes.STRING(20)
    },
    {
      sequelize,
      modelName: 'Category',
      timestamps: false,
      freezeTableName: true,
      tableName : "Category"
    }
  );
  return Category;
};
