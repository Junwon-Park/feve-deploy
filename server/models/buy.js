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
      models.Buy.belongsTo(models.Product);
      models.Buy.belongsTo(models.User);
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
      buy_price: {
        type:DataTypes.BIGINT,
        allowNull: false,
      },
      buy_sdate: {
        type:DataTypes.DATE,
        allowNull: false,
      },
      buy_edate: {
        type:DataTypes.DATE,
        allowNull: false,
      },
      buy_status: {
        type: DataTypes.STRING('1'),
        defaultValue: '0',
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Buy',
      timestamps: false,
      freezeTableName: true,
      tableName : "Buy"
      
    }
  );
  return Buy;
};
