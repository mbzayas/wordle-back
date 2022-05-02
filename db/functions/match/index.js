const { Match, Word, Sequelize } = require('../../models');
const crud = require('../CRUD');
const generic = crud(Match);
const countByUser = require('./countByUser');
const getMostGuessedWords = require('./getMostGuessedWords');

module.exports = {
  ...generic,
  countByUser: countByUser(Match, Sequelize),
  getMostGuessedWords: getMostGuessedWords(Match, Word, Sequelize)
};
