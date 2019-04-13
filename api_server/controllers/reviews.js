/* GET 'Add review' page */
var locations = require("../models/locations");
var mongoose = require("mongoose");
var loc = mongoose.model("Location");
var bodyParser = require("body-parser");


// GET ALL POSTS
module.exports.reviewsList = function(req, res, next) {    
    loc.find().exec(function (err, location){
        res
        .status(200)
        .send("Lista de reviews");
    })
};

// POST ALL POSTS
module.exports.reviewsCreate = function(req, res, next) {    
    loc.find().exec(function (err, location){
        res
        .status(200)
        .send("Review Creado");
    })
};

// GET ALL POSTS
module.exports.reviewsFindById = function(req, res, next) {    
    loc.findById(req.params.id).exec(function (err, location){
        res
        .status(200)
        .send("Id si se encuentra");
    })
};

// GET Updates
module.exports.reviewsUpdate = function(req, res, next) {    
    loc.update(req.params.id).exec(function (err, location){
        res
        .status(200)
        .send("Actualizado");
    })
};

// GET Find ONE
module.exports.findOne = function(req, res, next) {    
    loc.findOne().exec(function (err, location){
        res
        .status(200)
        .send(location.reviews);
    })
};
