
var mysql = require('mysql');

//Database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database : 'books'
  
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = con;