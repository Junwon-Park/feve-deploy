'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inspection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Inspection.belongsTo(models.User);
      models.Inspection.belongsTo(models.Product);
    }
  }
  Inspection.init(
    {
      INSPECTION_KEY: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
      INSPECTION_DATE: DataTypes.DATE,
      INSPECTION_STATUS: {
        type: DataTypes.STRING(1),
        defaultValue: '0'
      },
      INSPECTION_RESULT: DataTypes.STRING(1),
      INSPECTION_ADATE: DataTypes.DATE,
      INSPECTION_RDATE: DataTypes.DATE
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
