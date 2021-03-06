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
router.get('/locations/:lng/:lat', ctrlLocations.locationsListByDistance);


/* Locations pages */
router.get('/location/:id/reviews', ctrlReviews.reviewsList);
router.post('/location/:id/reviews', ctrlReviews.reviewsCreate);
router.get('/location/:id/reviews', ctrlReviews.reviewsFindById);
router.put('/location/:id/', ctrlReviews.reviewsUpdate);
router.get('/location/:id/findOne', ctrlReviews.findOne);

// Codigo Original Profe
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate2);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);






module.exports = router;



