const empty = require('is-empty');
const errMsg = require('../../../utils/errors.json').middleware
const { errorObject } = require('../../../utils/customError');
const validateGuess = require('./validateGuess');

module.exports = {
  validateGuess: validateGuess(empty, errorObject, errMsg)
};
