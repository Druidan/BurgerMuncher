const connection = require("../config/connection.js"); // Import MySQL connection.

//-------------------------------------

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) { 
    let arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) { 
        const value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) { 
            // if string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) { 
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString(); 
}

//-------------------------------------

// SQL functions object

const orm = {

    selectAll: (table, cb) => {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    insertBurger: () => {

    },

    updateBurger: () => {

    },
}

//-------------------------------------

// Export the orm object for the model (burger_model.js).
module.exports = orm;