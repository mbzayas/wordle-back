const getTop10Users = (Match) => async (req, res) => {
  const response = await Match.getTop10Users();

  return res.status(response.code).send(response.data);
};

module.exports = getTop10Users;
