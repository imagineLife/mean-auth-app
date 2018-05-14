const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//Register endpoint
router.post('/register', (req, res, next) => {
	
	//new User object
	let newUser = new User({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	})

	//add the new user obj to mongo
	User.addUser(newUser, (err, user) => {
		if(err){
			res.json({success:false, msg: 'Failed to register user', err: err})
		}else{
			res.json({success: true, msg: 'User successfulle registered!'})
		}

	})

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