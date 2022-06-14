//import dependencies
const express = require('express');
const mediaController = require('../controllers/Media');

// create a router object
const router = express.Router();

// GET route to get an image by its filename from the /server/images directory
router.get('/media/images/:filename', mediaController.getImageFile);

module.exports = router;

