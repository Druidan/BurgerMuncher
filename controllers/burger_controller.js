// Establish our Express Dependancy
const express = require('express');
const router = express.Router();

//Import our Burger Model to use its database functions.
const burger = require('../models/burger_model.js');

//Create our routes and set up logic where required.

//-------------------------------------

router.get('/', (req, res) => {
    burger.selectAll( data => {
        const handlebarsObj = {
            burgers: data
        };
        res.render('index', handlebarsObj);
    });
});

//-------------------------------------

router.post('/api/burgers', (req, res) => {
    burger.createBurger(req.body.newBurger, function(result) {
        res.json({ id: result.insertId });
    });
});

//-------------------------------------

router.update('/api/burgers/:id', (req, res) => {

});

//-------------------------------------
