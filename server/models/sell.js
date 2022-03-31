'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      models.Sell.belongsTo(models.Product,{foreignKey: "PRODUCT_KEY", targetKey:'PRODUCT_KEY'});
      models.Sell.belongsTo(models.User,{foreignKey: "SELL_SELLER_KEY",as:"SELL_SELLER", targetKey:"USER_KEY"});
      models.Sell.belongsTo(models.User,{foreignKey: "SELL_BUYER_KEY",as:"SELL_BUYER", targetKey:"USER_KEY"});

    }
  }
  Sell.init(
    { SELL_KEY: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
  },
      sell_price: {
        type:DataTypes.BIGINT,
        allowNull: false,
      },  
      sell_sdate: {
      type:DataTypes.DATE,
      allowNull: false,
      },    
      sell_edate: {
      type:DataTypes.DATE,
      allowNull: false,
      },
      sell_status: {
        type: DataTypes.STRING('1'),
        defaultValue: '0',
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Sell',
      timestamps: false,
      freezeTableName: true,
      tableName : "Sell"
    }
  );
  return Sell;
};
