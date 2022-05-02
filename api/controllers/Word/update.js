const update = (Word) => async (req, res) => {
  // set old words as active = false when new one is registered
  const response = await Word.update(req.body);

  return res.status(response.code).send(response.data);
};

module.exports = update;
