const mysql = require('mysql');

exports.mysql = (sql) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host:'localhost',
            port:3306,
            user:'root',
            password:'root',
            database:'especializa'
        })
        connection.connect();

        connection.query(
            sql,
            (error, results, fields) => {
                if(error)reject(error)
                resolve(results)
            }
        )
    })
}