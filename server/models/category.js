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
      models.Category.hasMany(models.Product,{foreignKey:'PRODUCT_CATE', sourceKey:'CATEGORY_KEY'});
      models.Category.hasMany(models.Category,{foreignKey:'CATEGORY_KEY', sourceKey:'CATEGORY_KEY'});
    }
  }
  Category.init(
    {
      CATEGORY_KEY: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      CATEGORY_PARENT: DataTypes.STRING(3),
      CATEGORY_NAME: { 
        allowNull: false,
        type: DataTypes.STRING(3) 
      },
      CATEGORY_DESC: {
        allowNull: false,
        type: DataTypes.STRING(20)
      }
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
