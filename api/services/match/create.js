const create = (Match) => async (args) => {
  return await Match.create(args);
};

module.exports = create;
