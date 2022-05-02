const update = (Word) => async (args, fields) => {
  const { id, value } = args;

  return await Word.update({ value }, id);
};

module.exports = update;
