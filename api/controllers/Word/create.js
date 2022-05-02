const create = (Word) => async (req, res) => {
  // select new word from dict every 5 min
  const response = await Word.create(req.body);

  return res.status(response.code).send(response.data);
};

module.exports = create;
