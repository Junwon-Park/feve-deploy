'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hashtag extends Model {
        static associate(models) {
            models.Hashtag.belongsToMany(models.Post, { through: 'PostHashtag' });
        }
    }
    Hashtag.init(
        {
            HASHTAG_KEY: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            HASHTAG_TITLE: {
                type:DataTypes.STRING(15),
                allowNull: true,
                unique: true,
            },
        },
        {
            sequelize,
            modelName: 'Hashtag',
            tableName: 'Hashtag',
            timestamps: false,
            freezeTableName: true,
        }
    );
    return Hashtag;
};
