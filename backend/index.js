'use strict'

let mysql = require('mysql');
let connection;

connection = mysql.createConnetion({
  host : '10.10.1.86',
  user : 'raduser',
  password : 'r@dus3r.208',
  database : 'radius'
});

connection.conect()
