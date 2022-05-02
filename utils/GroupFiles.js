const fs = require('fs');

const groupFiles = (basename, dirname, path) => {
  const files = [];
  fs.readdirSync(dirname)
    .filter((file) => {
      return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
      );
    })
    .forEach((file) => {
      const model = require(path.join(dirname, file));
      files.push(model);
    });
  return files;
};

module.exports = groupFiles;
