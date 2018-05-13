const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../models/database');

//user schema
const UserSchema = mongoose.Schema({
	name: { type: String },
	email: {type: String, required: true },
	username: {type: String, required: true },
	password: {type: String, required: true }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByID = (id, callback) => {
	User.findById(id, callback);
}

module.exports.getUserByUsername = (username, callback) => {
	const query = {username: username};
	User.findOne(query, callback);
}