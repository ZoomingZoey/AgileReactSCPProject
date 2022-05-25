// import express
const express = require('express');

// import the scps controller
const scpController = require('../controllers/Scps');

// create an express router object
const router = express.Router();

// route to get all scp subjects
router.get('/scps', scpController.getAllSubjects);

// route to get a single scp subject by its item e.g: /api/scps/002
router.get('/scps/:item', scpController.getOneSubject);

module.exports = router;
