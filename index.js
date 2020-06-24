const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./models/db.js');
const employeeController = require('./controllers/employeeController.js');
const passport = require('passport');

var app = express();
app.use(bodyParser.json()); 
app.use(cors({origin:'http://localhost:4200'})); 

app.use('/employees',employeeController);

app.listen(3000,() => console.log('Server started at port : 3000'));

 