var express = require('express');
var router = express.Router();
var ctrlLocation = require('../controllers/locations');


/* GET home page. */
router.get('/', ctrlLocation.homelist);

/* Locations pages */
router.get('/api', ctrlLocation.api);
router.get('/location', ctrlLocation.locationInfo);
router.get('/location/review/new', ctrlLocation.addReview);

/* Other page */
router.get('/about', ctrlLocation.about);

module.exports = router;
