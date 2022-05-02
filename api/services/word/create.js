const create = (Word) => async (args) => {
  return await Word.create(args);
};

module.exports = create;
