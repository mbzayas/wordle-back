const { User } = require('../../models');
const crud = require('../CRUD');
const generic = crud(User);

module.exports = {
  ...generic
};
