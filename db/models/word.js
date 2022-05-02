'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    static associate(models) {
      Word.hasMany(models.Match, {
        foreignKey: 'wordId'
      });
    }
  }
  Word.init({
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Word',
    freezeTableName: true
  });
  return Word;
};