const mysql = require('mysql');

let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'chirper',
        user: 'chirperapp',
        password: 'blahblah'
    }
);

connection.connect();

connection.query('SELECT * FROM chirps', (err,results, fields) => {
    if(err){
        connection.end();
        return console.log(err)
    }
    console.log(results);
    connection.end();
})
