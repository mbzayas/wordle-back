const start = require('./api');
start()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log('error');
    console.log(err);
  });
