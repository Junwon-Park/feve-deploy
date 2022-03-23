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
      models.Buy.belongsTo(models.product);
      models.Buy.belongsTo(models.user);
      models.Buy.belongsTo(models.user);
    }
  }
  Buy.init(
    {
      buy_price: DataTypes.BIGINT,
      buy_sdate: DataTypes.DATE,
      buy_edate: DataTypes.DATE,
      buy_status: {
        type: DataTypes.STRING('1'),
        defaultValue: '0'
      },
      product_key: DataTypes.BIGINT
    },
    {
      sequelize,
      modelName: 'Buy'
    }
  );
  return Sell;
};
