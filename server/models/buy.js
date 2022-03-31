'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Buy.belongsTo(models.Product, {foreignKey: "PRODUCT_KEY", targetKey:'PRODUCT_KEY'});
      models.Buy.belongsTo(models.User,{foreignKey: "BUY_BUYER_KEY",as:"BUY_BUYER", targetKey:"USER_KEY"});
      models.Buy.belongsTo(models.User,{foreignKey: "BUY_SELLER_KEY",as:"BUY_SELLER", targetKey:"USER_KEY"});

    }
  }
  Buy.init(
    {
      BUY_KEY: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      BUY_PRICE: {
        type:DataTypes.BIGINT,
        allowNull: false,
      },
      BUY_SDATE: {
        type:DataTypes.DATE,
        allowNull: false,
      },
      BUY_EDATE: {
        type:DataTypes.DATEONLY,
        allowNull: false,
      },
      BUY_STATUS: {
        type: DataTypes.STRING('1'),
        defaultValue: '0',
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Buy',
      freezeTableName: true,
      timestamps: false,
      tableName : "Buy"
      
    }
  );
  return Buy;
};
