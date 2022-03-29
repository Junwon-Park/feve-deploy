'use strict';
const { Model } = require('sequelize');
const { User } = require('../models');
module.exports = (sequelize, DataTypes) => {
  class Inspection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Inspection.belongsTo(models.User, {foreignKey: "USER_KEY", targetKey:"USER_KEY"});
      models.Inspection.belongsTo(models.Product, {foreignKey: "PRODUCT_KEY", targetKey:"PRODUCT_KEY"});
    }
  }
  Inspection.init(
    {
      INSPECTION_KEY: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
      INSPECTION_DATE: DataTypes.DATE,
      INSPECTION_STATUS: {
        type: DataTypes.STRING(1),
        allowNull: false,
        defaultValue: '0'
      },
      INSPECTION_RESULT: DataTypes.STRING(1),
      INSPECTION_ADATE: DataTypes.DATE,
      INSPECTION_RDATE: DataTypes.DATE,
      PRODUCT_KEY: DataTypes.BIGINT,
      USER_KEY: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: 'Inspection',
        timestamps: false,
        freezeTableName: true,
        tableName : "Inspection"
    }
  );
  return Inspection;
};
