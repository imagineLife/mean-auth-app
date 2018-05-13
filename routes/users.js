const express = require('express');
const router = express.Router();

//Register endpoint
router.get('/register', (req, res, next) => {
	res.send('User Register endpoint served!');
})

//Authenticate endpoint
router.get('/authenticate', (req, res, next) => {
	res.send('User Auth endpoint served!');
})

//Profiel endpoint, protecting later
router.get('/profile', (req, res, next) => {
	res.send('User profile endpoint served!');
})

//Validate endpoint, checking if token matches
router.get('/validate', (req, res, next) => {
	res.send('User validation endpoint served!');
})

module.exports = router;