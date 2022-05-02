const validateGuess = (empty, errObj, errMsg) => async (req, res, next) => {
  const data = req.body;

  if (empty(data)) {
    return res.status(errMsg.params_required.code).send({
      error: errObj(errMsg.params_required)
    });
  };

  return next();
};

module.exports = validateGuess;
