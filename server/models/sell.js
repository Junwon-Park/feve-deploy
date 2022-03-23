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
      models.Sell.belongsTo(models.product);
      models.Sell.belongsTo(models.users);
    }
  }
  Sell.init(
    {
      sell_price: DataTypes.BIGINT,
      sell_sdate: DataTypes.DATE,
      sell_edate: DataTypes.DATE,
      sell_status: {
        type: DataTypes.STRING('1'),
        defaultValue: '0'
      }
    },
    {
      sequelize,
      modelName: 'Sell'
    }
  );
  return Sell;
};
