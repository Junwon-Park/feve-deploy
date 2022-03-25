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
      models.Cscenter.belongsTo(models.User);
    }
  }
  CSCENTER.init(
    {
      CSCENTER_TITLE: DataTypes.STRING(100),
      CSCENTER_CONTENTS: DataTypes.TEXT,
      CSCENTER_WDATE: DataTypes.DATE,
      CSCENTER_STATUS: {
        type: DataTypes.STRING(1),
        defaultValue: '0'
      },
      CSCENTER_COMMENT: DataTypes.BIGINT,
      CSCENTER_COMMENT_WDATE: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Cscenter'
    }
  );
  return Cscenter;
};
