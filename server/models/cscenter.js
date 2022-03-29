'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cscenter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Cscenter.belongsTo(models.User,{foreignKey:"USER_KEY", targetKey:"USER_KEY"});
    }
  }
    Cscenter.init(
    {
      CSCENTER_KEY: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      CSCENTER_TITLE: {
        type:DataTypes.STRING(100),
        allowNull: false
      },
      CSCENTER_CONTENTS: {
        type:DataTypes.TEXT,
        allowNull: false
      },
      CSCENTER_WDATE: {
        type:DataTypes.DATE,
        allowNull: false
      },
      CSCENTER_STATUS: {
        type: DataTypes.STRING(1),
        defaultValue: '0',
        allowNull: false
      },
      CSCENTER_COMMENT: {
        type:DataTypes.BIGINT,
        allowNull: true
      },
      CSCENTER_COMMENT_WDATE: {
        type:DataTypes.DATE,
        allowNull: false
    },
  },
    {
      sequelize,
      modelName: 'Cscenter',
      freezeTableName:true,
      tableName:"Inspection",
      timestamps:false
      
    }
  );
  return Cscenter;
};
