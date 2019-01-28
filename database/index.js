const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'meru',
    password: 'meru',
    database: 'moviebertasbih',
    port: 3306
});

module.exports = conn;