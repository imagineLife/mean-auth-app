//main server entrypoint file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/dbConfig')

//get mongo/mongoose connected
mongoose.connect((config.database));

//tell console when mongo is connected
mongoose.connection.on('connected', ()=>{
	console.log('connected to local mongoDB '+config.database);
})

mongoose.connection.on('error', (err)=>{
	console.log('MONGO DB ERROR: ', err);
})

//initialize app
const app = express();

//routes
const userRoute = require('./routes/users');

//make port var
const port = 3000;

//manual CORS
app.use( (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
})

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//enable body-parser
app.use(bodyParser.json());

//USE the user router
app.use('/users', userRoute);

//listen on the port
app.listen(port, () => {
	console.log('server started & running on port ->',port);
})

//basic route
app.get('/', (req,res) => {
	res.send('Basic endpoint served!');
})