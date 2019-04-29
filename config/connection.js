
require(`dotenv`).config();
const mysql = require(`mysql`);

const connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection( {
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.M_PASS,
        database: "burgers_db"
    });
};

connection.connect( err => {
    if (err) {
        console.error(`There was a problem with your connection: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;