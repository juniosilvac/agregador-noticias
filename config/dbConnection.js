var mysql = require('mysql');

module.exports = function() {
  return mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
  });
}