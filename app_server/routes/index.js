var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');


/* GET home page. */
router.get('/', ctrlMain.index);

/* GET the API. */
router.get('/api', ctrlMain.api);

module.exports = router;
