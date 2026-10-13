require('dotenv').config();

const config = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  test: {
    dialect: 'sqlite',
    storage: './database.test.sqlite',
  },
};

module.exports = config;
