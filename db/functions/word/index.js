const { Word } = require('../../models');
const crud = require('../CRUD');
const generic = crud(Word);

module.exports = {
  ...generic
};
