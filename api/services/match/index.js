const { Match } = require('../../../db/functions');
const countByUser = require('./countByUser');
const create = require('./create');
const getMostGuessedWords = require('./getMostGuessedWords');
const getTop10Users = require('./getTop10Users');
const update = require('./update');

module.exports = {
  countByUser: countByUser(Match),
  create: create(Match),
  getMostGuessedWords: getMostGuessedWords(Match),
  getTop10Users: getTop10Users(Match),
  update: update(Match),
};
