/* GET 'Add review' page */
var locations = require("../models/locations");
var mongoose = require("mongoose");
var loc = mongoose.model("Location");
var bodyParser = require("body-parser");

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

// GET ALL POSTS
module.exports.locationList = function(req, res, next) {    
    loc.find().exec(function (err, location){
        if (err) {
            return res.status(404);
        } else {
            if (location != null) {
                return res.status(200).send(location);
            } else{
                return res.status(404).send("No hay elementos");
            }
        }
    })
};

// GET find by ID
module.exports.locationsFindById = function(req, res, next) {    
    loc.findById(req.params.id).exec(function (err, location){
        if (err) {
            return res.status(404).send({message: "Bad request"});
        } else {
            if (location != null) {
                return res.status(200).send(location);
            } else{
                return res.status(404).send("No hay elementos");
            }
        }
    })
};

// POST ADD ELEMENT
module.exports.locationsCreate = function(req, res, next) {    
    loc.create({
        name: req.params.name,
        address: req.params.address,
        facilities: req.params.facilities.split(","),
        coords: [parseFloat(req.params.lng), parseFloat(req.params.lat)],
        openingTimes: [{
          days: req.params.days1,
          opening: req.params.opening1,
          closing: req.params.closing1,
          closed: req.params.closed1,
        }, {
          days: req.params.days2,
          opening: req.params.opening2,
          closing: req.params.closing2,
          closed: req.params.closed2,
        }]
      }, function(err, location) {
        if (err) {
          console.log(err);
          return res.status(404).send(error);
        } else {
          console.log(location);
          return sendJSONresponse(res, 201, location);
        }
      });
};

// GET Find ONE
module.exports.findOne = function(req, res, next) {    
    loc.findOne().exec(function (err, location){
        res.send(location);
    })
};

// PUT find by ID
module.exports.locationsUpdate = function(req, res, next) {    
    loc.findById(req.params.id).exec(function (err, location){
        res
        .status(20)
        .send(location);
    })
};

// PUT find by ID
module.exports.locationsDelete = function(req, res, next) {    
    loc.findById(req.params.id).exec(function (err, location){
        res
        .status(204)
        .send(location);
    })
};