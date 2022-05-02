const countByUser = (Match) => async () => 
  await Match.countByUser({
    userId: null,
    countVictories: true,
    limit: 10
  });

module.exports = countByUser;
