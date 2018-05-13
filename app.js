//main server entrypoint file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//initialize app
const app = express();

//make port var
const port = 3000;

//manual CORS
app.use( (req, res, next) => {
	res.header("Access-Control-Allow-Origin", " *");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

//listen on the port
app.listen(port, () => {
	console.log('server started & running on port ->',port);
})

//basic route
app.get('/', (req,res) => {
	res.send('Basic endpoint served!');
})