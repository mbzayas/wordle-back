const getMostGuessedWords = (Match, Word, Sequelize) => async () => {
  return await Match.findAll({
    attributes: [
      [Sequelize.fn('COUNT', Sequelize.col('wordId')), 'timesGuessed']
    ],
    include: [
      {
        attributes: ['value'],
        model: Word,
        required: true
      }
    ],
    where: {
      state: 'won'
    },
    raw: true,
    nested: true,
  });
};

module.exports = getMostGuessedWords;
