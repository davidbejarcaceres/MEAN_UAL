var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');

/* Locations pages */
router.get('/location', ctrlLocations.locationList);
router.get('/location/findOne', ctrlLocations.findOne);
router.post('/location', ctrlLocations.locationsCreate);
router.get('/location/:id?', ctrlLocations.locationsFindById);
router.put('/location/:id?', ctrlLocations.locationsUpdate);
router.delete('/location/:id?', ctrlLocations.locationsDelete);

/* Locations pages */
router.get('/location/:id/reviews', ctrlReviews.reviewsList);
router.post('/location/:id/reviews', ctrlReviews.reviewsCreate);
router.get('/location/:id/reviews', ctrlReviews.reviewsFindById);
router.put('/location/:id/', ctrlReviews.reviewsUpdate);
router.get('/location/:id/findOne', ctrlReviews.findOne);







module.exports = router;



