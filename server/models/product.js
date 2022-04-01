'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Product.belongsTo(models.Category, {foreignKey: "PRODUCT_CATE", targetKey:'CATEGORY_KEY'});
      
      models.Product.hasMany(models.Buy, {foreignKey: "PRODUCT_KEY", sourceKey:'PRODUCT_KEY'});
      models.Product.hasMany(models.Sell, {foreignKey: "PRODUCT_KEY", sourceKey:'PRODUCT_KEY'});
      models.Product.hasMany(models.Favorite, {foreignKey: "PRODUCT_KEY", sourceKey:'PRODUCT_KEY'});
      models.Product.hasMany(models.Inspection,{foreignKey:'PRODUCT_KEY', sourceKey:'PRODUCT_KEY'});
    }
  }
  Product.init(
    {
      PRODUCT_KEY: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
      },
      PRODUCT_BRAND: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      PRODUCT_NAME: {
        type: DataTypes.STRING(100),
        allowNull: false,
      }, 
      PRODUCT_MNUM: {
        type:DataTypes.STRING(100),
        allowNull: false,
      },
      PRODUCT_LDATE: {
        type:DataTypes.DATEONLY,
        allowNull: false,
      },
      PRODUCT_PIC: {
        type:DataTypes.STRING(255),
        allowNull: false,
      },
      PRODUCT_DESC: {
        type:DataTypes.STRING(500),
        allowNull: false,
      },
      PRODUCT_ORIPRICE: {
        type:DataTypes.BIGINT,
        allowNull: false,
      },
      PRODUCT_WDATE: {
        type:DataTypes.DATE,
        allowNull: false,
      },
      PRODUCT_CATE: {
        type:DataTypes.BIGINT,
        allowNull: false,
      },
      PRODUCT_PIC2: {
        type:DataTypes.STRING(255),
      },
      PRODUCT_PIC3: {
        type:DataTypes.STRING(255),
      },
    PRODUCT_DELETE: {
        allowNull: false,
        type: DataTypes.STRING(1),
        defaultValue: '0'
    },
    }, {
      sequelize,
      modelName: 'Product',
      timestamps: false,
      freezeTableName: true,
      tableName : "Product"
    });
  return Product;
};
