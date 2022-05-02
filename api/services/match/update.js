const update = (Match) => async (args) => {
  const { id, state, tries } = args;
  const params = {};

  if (state !== null || state !== undefined) {
    params.state = state;
  };

  if (!tries) {
    params.tries = tries
  };

  return await Match.update(params, id);
};

module.exports = update;
