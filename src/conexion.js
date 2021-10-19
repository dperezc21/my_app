const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ludycom2021*',
    port:"3306",
    database: 'prueba_tecnica'
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Connection - Goog Job!")
    }
});



module.exports = mysqlConnection;