const { Word } = require('../../../db/functions');
const create = require('./create');
const update = require('./update');

module.exports = {
  create: create(Word),
  update: update(Word),
};
