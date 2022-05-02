const empty = require('is-empty');
const errMsg = require('../../../utils/errors.json').middleware
const { errorObject } = require('../../../utils/customError');
const validateCountMatches = require('./validateCountMatches');

module.exports = {
  validateCountMatches: validateCountMatches(empty, errorObject, errMsg)
};
