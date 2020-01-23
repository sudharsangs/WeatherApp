const express = require('express');
var Weather = require('../models/weather');

var Router = express.Router();

Router.get('/:city', (req,res) => {
    var city = req.params.city;

    Weather.retrieveByCity(city, (err,weather) => {
        if(err) 
            return res.json(err);
        return res.json(weather);
    })
})

module.exports = Router;