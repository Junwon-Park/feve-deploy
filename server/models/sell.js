'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Sell.belongsTo( models.product, {
        foreignKey: 'product_key'
      });
      models.Sell.belongsTo( models.user, {
        foreignKey: {
          name: "sell_seller_key",
          allowNull: false,
        },
        as: "sell_seller_key",
        targetKey: "user_key",
      });
      models.Sell.belongsTo( models.user, {
        foreignKey: {
          name: "sell_buyer_key",
          allowNull: false,
        },
        as: "sell_buyer_key",
        targetKey: "user_key",
      });
    }
  }
  Sell.init({
    sell_price: DataTypes.BIGINT,
    sell_sdate: DataTypes.DATE,
    sell_edate: DataTypes.DATE,
    sell_status: {
      type:DataTypes.STRING("1"),
      defaultValue: "0"

    },
    product_key:DataTypes.BIGINT,
    sell_seller_key:DataTypes.BIGINT,
    seller_buyer_key:DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'Sell',
  });
  return Sell;
};