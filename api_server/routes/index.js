var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');

/* Locations pages */
router.get('/location/findOne', ctrlLocations.findOne);


module.exports = router;



