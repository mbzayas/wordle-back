const countByUser = (Match) => async (req, res) => {
  const response = await Match.countByUser(req.body);

  return res.status(response.code).send(response.data);
};

module.exports = countByUser;
