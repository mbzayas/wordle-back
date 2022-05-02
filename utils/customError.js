const empty = require('is-empty');
const errMsg = require('./errors.json').generic;

const buildError = (errObj) => {
  const error = new Error(errObj.message);

  error.name = errObj.name;
  error.code = errObj.code;
  error.internal_code = errObj.internal_code;

  return error;
};

const errorObject = (err) => {
  if (empty(err.name)) {
    err.name = errMsg.unknown.name;
  }

  if (empty(err.internal_code)) {
    err.internal_code = errMsg.unknown.internal_code;
  }

  if (empty(err.message)) {
    err.message = errMsg.unknown.message;
  }

  return {
      name: err.name,
      internal_code: err.internal_code,
      message: err.message
  };
};

const errorResponse = (err) => {
  if (empty(err.code)) {
    err.code = 400;
  };

  return {
    code: err.code,
    data: {
      error: errorObject(err)
    }
  };
}

module.exports = {
  buildError,
  errorObject,
  errorResponse
};
