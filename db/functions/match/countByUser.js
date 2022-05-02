const countByUser = (Match, Sequelize) => async ({
  userId,
  countVictories,
  limit
}) => {
  let where = {};

  if (countVictories) {
    where.state = 'won';
  };

  if (userId) {
    where.userId = userId
  };

  return await Match.findAll({
    attributes: [
      [Sequelize.fn('COUNT', Sequelize.col('userId')), 'amount']
    ],
    ...where,
    limit: limit > 0 ? limit : null,
    raw: true,
    nested: true,
  });
};

module.exports = countByUser;
