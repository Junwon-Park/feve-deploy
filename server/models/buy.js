'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Buy.belongsTo( models.product, {
        foreignKey: 'product_key'
      });
      models.Buy.belongsTo( models.user, {
        foreignKey: {
          name: "buy_buyer_key",
          allowNull: false,
        },
        as: "buy_buyer_key",
        targetKey: "user_key",
      });
      models.Buy.belongsTo( models.user, {
        foreignKey: {
          name: "buy_seller_key",
          allowNull: false,
        },
        as: "buy_seller_key",
        targetKey: "user_key",
      });
  
    }
  }
  Buy.init({
    buy_price: DataTypes.BIGINT,
    buy_sdate: DataTypes.DATE,
    buy_edate: DataTypes.DATE,
    buy_status: {
      type:DataTypes.STRING("1"),
      defaultValue: "0"

    },
    product_key:DataTypes.BIGINT,
    buy_seller_key:DataTypes.BIGINT,
    buy_buyer_key:DataTypes.BIGINT,


  }, {
    sequelize,
    modelName: 'Buy',
  });
  return Sell;
};