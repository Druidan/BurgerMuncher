// Establish our Express Dependancy
const express = require('express');
const router = express.Router();

//Import our Burger Model to use its database functions.
const burger = require('../models/burger_model.js');

//Create our routes and set up logic where required.

//-------------------------------------

router.get('/', (req, res) => {

    burger.selectAll(data => {
        const handlebarsObj = {
            burgers: data
        };
        res.render('index', handlebarsObj);
    });

});

//-------------------------------------

router.post('/api/burgers', (req, res) => {
    const newBurger = req.body.name
    burger.createBurger(newBurger, (result) => {
        res.json({
            id: result.insertId
        });
    });

});

//-------------------------------------

router.put('/api/burgers/:id', (req, res) => {

    const condition = `id = ${req.params.id}`;

    burger.updateBurger({
        munched: req.body.munched
    }, condition, (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

//-------------------------------------
router.delete('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    burger.removeBurger(condition, (result) => {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

});

//-------------------------------------

// Export routes for server.js to use.
module.exports = router;