const { Word, Match } = require('../../services');
const create = require('./create');
const getMostGuessedWords = require('./getMostGuessedWords');
const guess = require('./guess');
const update = require('./update');

module.exports = {
  create: create(Word),
  getMostGuessed: getMostGuessedWords(Match),
  guess: guess(Match),
  update: update(Word)
};
