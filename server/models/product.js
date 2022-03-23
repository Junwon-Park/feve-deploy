'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PRODUCT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.PRODUCT.belongsTo(models.CATEGORY);

      models.PRODUCT.hasMany(models.BUY);
      models.PRODUCT.hasMany(models.CELL);
      models.PRODUCT.hasMany(models.FAVORITE);
      models.PRODUCT.hasMany(models.INSPECTION);
    }
  }
  PRODUCT.init({
    PRODUCT_KEY : DataTypes.BIGINT,
    PRODUCT_BRAND: DataTypes.STRING(100),
    PRODUCT_NAME: DataTypes.STRING(100),
    PRODUCT_MNUM: DataTypes.STRING(100),
    PRODUCT_LDATE: DataTypes.DATEONLY,
    PRODUCT_PIC: DataTypes.STRING(255),
    PRODUCT_DESC: DataTypes.STRING(500),
    PRODUCT_ORIPRICE: DataTypes.BIGINT,
    PRODUCT_WDATE: DataTypes.DATE,
    PRODUCT_UDATE: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PRODUCT',
  });
  return PRODUCT;
};