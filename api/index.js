const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('../config/environment');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(router);

const start = () => {
  return new Promise((resolve, reject) => {
    app.listen(config.PORT, () => {
      resolve('Running on port: ' + config.PORT);
    });
  });
};

module.exports = start;
