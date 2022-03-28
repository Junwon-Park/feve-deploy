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
      models.Product.belongsTo(models.Category);

      models.Product.hasMany(models.Buy);
      models.Product.hasMany(models.Sell);
      models.Product.hasMany(models.Favorite);
      models.Product.hasMany(models.Inspection);
    }
  }
  Product.init(
    {
      PRODUCT_KEY: {
          type: DataTypes.BIGINT,
          primaryKey: true
      },
      PRODUCT_BRAND: DataTypes.STRING(100),
      PRODUCT_NAME: DataTypes.STRING(100),
      PRODUCT_MNUM: DataTypes.STRING(100),
      PRODUCT_LDATE: DataTypes.DATEONLY,
      PRODUCT_PIC: DataTypes.STRING(255),
      PRODUCT_DESC: DataTypes.STRING(500),
      PRODUCT_ORIPRICE: DataTypes.BIGINT,
      PRODUCT_WDATE: DataTypes.DATE,
      PRODUCT_CATE: DataTypes.BIGINT
    }, {
      sequelize,
      modelName: 'Product',
      timestamps: false,
      freezeTableName: true,
      timezone: 'Asia/Seoul',
      tableName : "Product"
    });
  return Product;
};
