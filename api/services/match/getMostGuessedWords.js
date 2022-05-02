const getMostGuessedWords = (Match) => async () => 
  await Match.getMostGuessedWords();

module.exports = getMostGuessedWords;
