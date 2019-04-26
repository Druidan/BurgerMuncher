const orm = require("../config/orm.js"); // Import the ORM to create functions that will interact with the database.

//-------------------------------------

const burger = {
    //-----------
    selectAll: (cb) => {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    //-----------
    createBurger: (newBurger, cb) => {
        orm.createBurger("burgers", newBurger, function (res) {
            cb(res)
        });
    },
    //-----------
    updateBurger: (condition, cb) => {
        orm.updateBurger("burgers", condition, function (res) {
            cb(res)
        });
    }
};

//-------------------------------------

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;