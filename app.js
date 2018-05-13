//main server entrypoint file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//initialize app
const app = express();

//make port var
const port = 3000;

//listen on the port
app.listen(port, () => {
	console.log('server started & running on port ->',port);
})