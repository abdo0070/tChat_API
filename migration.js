var mysql = require('mysql2');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat_app'
});

migration.init(connection, __dirname + '/migrations', function() {
  console.log("finished running migrations");
});