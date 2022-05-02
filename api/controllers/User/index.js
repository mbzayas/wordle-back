const { Match } = require('../../services');
const countByUser = require('./countByUser');
const getTop10Users = require('./getTop10Users');

module.exports = {
  countMatches: countByUser(Match),
  getTop10: getTop10Users(Match)
};
