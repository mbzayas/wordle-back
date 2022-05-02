'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    static associate(models) {
      Match.belongsTo(models.User, { foreignKey: 'userId' });
      Match.belongsTo(models.Word, { foreignKey: 'wordId' });
    }
  }
  Match.init({
    userId: DataTypes.UUID,
    wordId: DataTypes.UUID,
    tries: DataTypes.NUMERIC,
    state: DataTypes.ENUM(
      'ongoing',
      'failed',
      'won'
    ),
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Match',
    freezeTableName: true
  });
  return Match;
};