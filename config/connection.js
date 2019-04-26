
require(`dotenv`).config();
const mysql = require(`mysql`);
const pswd = require(`./mysqlPswd`);

//Establish MySQL Password from .env through mysqlPswd.js
const MySQLPswd = pswd.mysqlPswd.pswd;

const connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: MySQLPswd,
    database: "burgers_db"
});

connection.connect( err => {
    if (err) {
        console.error(`There was a problem with your connection: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;