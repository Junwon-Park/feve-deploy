'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Follow.belongsTo(models.User,{foreignKey: "FOLLOWER_ID",targetKey:"USER_KEY"});
      models.Follow.belongsTo(models.User,{foreignKey: "FOLLOWING_ID",targetKey:"USER_KEY"});

    }
  }
    Follow.init(
    {
      FOLLOW_KEY: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    },
    {
      sequelize,
      modelName: 'Follow',
      freezeTableName: true,
      timestamps: false,
      tableName : "Follow"
      
    }
  );
  return Follow;
};
