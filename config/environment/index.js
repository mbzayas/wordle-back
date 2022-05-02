require('dotenv').config();
const DEVELOPMENT = require('./development');
const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if (NODE_ENV === 'production') {
  const PRODUCTION = require('./production');
  currentEnv = PRODUCTION;
} else if (NODE_ENV === 'qa') {
  const QA = require('./qa');

  currentEnv = QA;
}

module.exports = currentEnv;
