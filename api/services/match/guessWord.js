const { constants } = require('../../../utils');

const countByUser = (Match) => async (args) => {
  const { matchId, userId, user_word } = args;
  let responseArr = [];

  let matchRecord = await Match.get({ id: matchId });

  if (!matchRecord) {
    // create record on db when user tries for the 1st time
    // matchRecord = await Match.create(data);
  };

  if (matchRecord.tries > 4) {
    return {
      data: 'Max tries reached',
      code: 403
    };
  };

  if (matchRecord.state === constants.states.failed) {
    return {
      data: 'Match is already lost',
      code: 403
    };
  };

  let currentTries = matchRecord.tries;
  let correctLetters = [];

  const selectedWord = matchRecord.word;

  for (let i = 0; i < selectedWord.length; i++) {
    if (currentTries > 4) {
      continue;
    };

    if (user_word[i] === selectedWord[i]) {
      responseArr.push({
        letter: user_word[i],
        value: 1
      });

      correctLetters.push(true);

      currentTries++;
      continue;
    };

    if (user_word[i] !== selectedWord[i]) {
      if (selectedWord.includes(user_word[i])) {
        responseArr.push({
          letter: user_word[i],
          value: 2
        });
      };

      currentTries++;
      continue;
    };

    if (!selectedWord.includes(user_word[i])) {
      responseArr.push({
        letter: user_word[i],
        value: 3
      });

      currentTries++;
    };
  };

  await Match.update({ tries: currentTries }, matchId);

  if (correctLetters.length === selectedWord.length) {
    await Match.update({ state: constants.states.won }, matchId);
  };

  return {
    data: responseArr,
    code: 200
  };
};

module.exports = countByUser;
