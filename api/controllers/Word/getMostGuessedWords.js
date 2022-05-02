const getMostGuessedWords = (Match) => async (req, res) => {
  const response = await Match.getMostGuessedWords();

  return res.status(response.code).send(response.data);
};

module.exports = getMostGuessedWords;
