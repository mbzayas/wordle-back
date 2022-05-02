const validateCountMatches = (empty, errObj, errMsg) => (req, res, next) => {
  const data = req.body;

  if (empty(data)) {
    return res.status(errMsg.params_required.code).send({
      error: errObj(errMsg.params_required)
    });
  };

  if (empty(data.userId)) {
    return res.status(errMsg.user_required.code).send({
      error: errObj(errMsg.user_required)
    });
  };

  return next();
};

module.exports = validateCountMatches;
