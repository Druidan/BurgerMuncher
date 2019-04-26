
require(`dotenv`).config();
const mysql = require(`mysql`);

const connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PSWD,
    database: "bamazon"
});

connection.connect( err => {
    if (err) {
        console.error(`There was a problem with your connection: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;