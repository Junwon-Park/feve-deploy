'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FAVORITE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.FAVORITE.belongsTo(models.PRODUCT);
      models.FAVORITE.belongsTo(models.USER);
    }
  }
  FAVORITE.init({
    FAVORITE_KEY: DataTypes.BIGINT,
    USER_KEY: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'FAVORITE',
  });
  return FAVORITE;
};