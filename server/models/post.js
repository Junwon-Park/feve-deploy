'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            models.Post.belongsTo(models.User, {
                foreignKey: "USER_KEY",
                targetKey:"USER_KEY"
            });
            models.Post.hasMany(models.Hashtag, {
                foreignKey: 'POST_KEY',
                sourceKey: 'POST_KEY'
            });
            models.Post.hasMany(models.PostComment,{
                foreignKey: 'POST_KEY',
                sourceKey: 'POST_KEY'
            })
        }
    }
    Post.init(
        {
            POST_KEY: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            POST_CONTENT: {
                type:DataTypes.TEXT,
                allowNull: true,
            },
            POST_WDATE: {
                type: DataTypes.DATE,
                allowNull: false
            },
            POST_PIC: {
                type:DataTypes.STRING(100),
                defaultValue:"default_pic.jpg",
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: 'Post',
            tableName: 'Post',
            timestamps: false,
            freezeTableName: true,
        }
    );
    return Post;
};
