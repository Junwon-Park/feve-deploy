'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Buy);
      models.User.hasMany(models.Sell);
      models.User.hasMany(models.Cscenter);
      models.User.hasMany(models.Favorite);
      models.User.hasMany(models.Inspection);
    }
  }
  User.init(
    {
      USER_KEY: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      USER_ID: DataTypes.STRING(20),
      USER_PASSWORD: DataTypes.STRING,
      USER_NAME: DataTypes.STRING(100),
      USER_MAIL: DataTypes.STRING(50),
      USER_PHONE: DataTypes.STRING(30),
      USER_ADDRESS1: DataTypes.STRING(100),
      USER_ADDRESS2: DataTypes.STRING(100),
      USER_DELETE: DataTypes.STRING(1),
      USER_ADMIN: DataTypes.STRING(1),
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'User',
      timestamps: false
    }
  );
  return User;
};
