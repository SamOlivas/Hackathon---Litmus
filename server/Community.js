const db = require('./db');
const Sequelize = require('sequelize');

const Community = db.define('community', {
  name: {
    type: Sequelize.STRING
  },
  comments: {
    type: Sequelize.ARRAY
  }
});

module.exports = Community;
