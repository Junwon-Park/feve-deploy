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
      models.user.hasMany(models.buy, { foreignKey: 'BUY_BUYER_KEY' });
      models.user.hasMany(models.buy, { foreignKey: 'BUY_SELLER_KEY' });
      models.user.hasMany(models.sell, { foreignKey: 'SELL_SELLER_KEY' });
      models.user.hasMany(models.sell, { foreignKey: 'SELL_BYUER_KEY' });
      models.user.hasMany(models.cscenter, { foreignKey: 'USER_KEY' });
      models.user.hasMany(models.favorite, { foreignKey: 'USER_KEY' });
      models.user.hasMany(models.inspection, { foreignKey: 'USER_KEY' });
    }
  }
  User.init(
    {
      USER_ID: DataTypes.STRING(20),
      USER_PASSWORD: DataTypes.STRING,
      USER_NAME: DataTypes.STRING(100),
      USER_MAIL: DataTypes.STRING(50),
      USER_PHONE: DataTypes.STRING(30),
      USER_ADDRESS1: DataTypes.STRING(100),
      USER_ADDRESS2: DataTypes.STRING(100),
      USER_DELETE: DataTypes.STRING(1),
      USER_ADMIN: DataTypes.STRING(1)
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
