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
      models.User.hasMany(models.Buy, {
        foreignKey: 'BUY_BUYER_KEY',
        as: 'BUY_BUYER',
        sourceKey: 'USER_KEY'
      });
      models.User.hasMany(models.Buy, {
        foreignKey: 'BUY_SELLER_KEY',
        as: 'BUY_SELLER',
        sourceKey: 'USER_KEY'
      });
      models.User.hasMany(models.Sell, {
        foreignKey: 'SELL_BUYER_KEY',
        as: 'SELL_BUYER',
        sourceKey: 'USER_KEY'
      });
      models.User.hasMany(models.Sell, {
        foreignKey: 'SELL_SELLER_KEY',
        as: 'SELL_SELLER',
        sourceKey: 'USER_KEY'
      });
      models.User.hasMany(models.Cscenter, {
        foreignKey: 'USER_KEY',
        sourceKey: 'USER_KEY'
      });
      models.User.hasMany(models.Favorite, {
        foreignKey: 'USER_KEY',
        sourceKey: 'USER_KEY'
      });
      models.User.hasMany(models.Inspection, {
        foreignKey: 'USER_KEY',
        sourceKey: 'USER_KEY'
      });
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
      USER_DELETE: {
        type: DataTypes.STRING(1),
        allowNull: false,
        defaultValue: '0'
      },
      USER_ADMIN: {
        type: DataTypes.STRING(1),
        allowNull: false,
        defaultValue: '0'
      },
      POST_CODE: { type: DataTypes.STRING(10), allowNull: false },
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
