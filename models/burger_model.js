const orm = require("../config/orm.js"); // Import the ORM to create functions that will interact with the database.

//-------------------------------------

const burger = {
    //-----------
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res)
        });
    },
    //-----------
    createBurger: (newBurger, cb) => {
        orm.createBurger("burgers", newBurger, (res) => {
            cb(res)
        });
    },
    //-----------
    updateBurger: (objColAndVal, condition, cb) => {
        orm.updateBurger("burgers", objColAndVal, condition, (res) => {
            cb(res)
        });
    },
        //-----------
    removeBurger: (condition, cb) => {
        orm.removeBurger("burgers", condition, (res) => {
            cb(res)
        });
    }
};

//-------------------------------------

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;