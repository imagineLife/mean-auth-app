const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/dbConfig')

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
router.post('/authenticate', (req, res, next) => {
	//Grab uName & pWord from request
	const un = req.body.username;
	const pw = req.body.password;

	User.getUserByUsername(un, (err, user) => {
		if(err) throw err;

		//if NOT a user
		if(!user){
			return res.json({
				success: false,
				msg: "that user is not found"
			})
		}

		User.comparePassword(pw, user.password, (err, isMatching) => {
			if(err) throw err;

			//if there IS a matching password
			if(isMatching){
				const token = jwt.sign({data: user}, config.secret, {
					expiresIn: 604800 //1 week
				})

				res.json({
					success: true,
					token: 'jwt '+token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}
				})
			}else{
			//if the password doesn't work
				return res.json({
					success: false,
					msg: 'Wrong password'
				})
			}
		})
	})

})

//Profiel endpoint, protecting later
router.get('/profile', (req, res, next) => {
	res.send('User profile endpoint served!');
})

module.exports = router;