/* GET 'Add review' page */
var locations = require("../models/locations");
var mongoose = require("mongoose");
var loc = mongoose.model("Location");
var bodyParser = require("body-parser");


module.exports.findOne = function(req, res, next) {    
    loc.findOne().exec(function (err, location){
        res.send(location);
    })
};