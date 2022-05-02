const guess = (Match) => async (req, res) => {
  const response = await Match.guessWord(req.body);

  return res.status(response.code).send(response.data);
};

module.exports = guess;