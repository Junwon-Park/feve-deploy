'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PostComment extends Model {
        static associate(models) {
            models.PostComment.belongsTo(models.Post, {
                foreignKey: "POST_KEY",
                targetKey:"POST_KEY"
            });
            models.PostComment.belongsTo(models.User, {
                foreignKey: "USER_KEY",
                targetKey:"USER_KEY"
            });
        }
    }
    PostComment.init(
        {
            COMMENT_KEY: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            COMMENT_CONTENT:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            COMMENT_WDATE: {
                allowNull: false,
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: 'PostComment',
            tableName: 'PostComment',
            timestamps: false,
            freezeTableName: true,
        }
    );
    return PostComment;
};
