var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_eicherce',
  password        : '7701',
  database        : 'cs340_eicherce'
});

module.exports.pool = pool;
