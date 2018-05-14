const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

//Register endpoint
router.post('/register', (req, res, next) => {
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

module.exports = router;