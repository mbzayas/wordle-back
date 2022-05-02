const countByUser = (Match) => async (args) => {
  let response = {
    timesPlayed: 0,
    victories: 0
  };

  const timesPlayed = await Match.countByUser({
    userId: args.userId,
    countVictories: false
  });

  const victories = await Match.countByUser({
    userId: args.userId,
    countVictories: false
  });

  response.timesPlayed = timesPlayed.amount;
  response.victories = victories.amount;

  return response;
};

module.exports = countByUser;
