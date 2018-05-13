const express = require('express');
const router = express.Router();

//Register endpoint
router.get('/register', (req, res, next) => {
	res.send('User Register endpoint served!');
})

module.exports = router;