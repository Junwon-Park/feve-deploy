'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Favorite.belongsTo(models.Product, {foreignKey: "PRODUCT_KEY", targetKey:'PRODUCT_KEY'});
      models.Favorite.belongsTo(models.User, {foreignKey: "USER_KEY", targetKey:'USER_KEY'});
    }
  }
  Favorite.init(
    {
      FAVORITE_KEY: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      }
    },
    {
      sequelize,
      modelName: 'Favorite',
      freezeTableName: true,
      timestamps: false,
      tableName : "Favorite"
    }
  );
  return Favorite;
};
