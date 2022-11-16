const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

//what does the schema do and mean in https://github.com/BYU-CS-260/learning-mongo/blob/master/lesson3/README.md?
//Schema is the way data is organized in a table. Setups the data fields and the data types of those fields. Like they control the headers of your table
//Is there a way for me to see all my mongoose data? Can download mongo db app. or use command line. 
//how to handle other API? Call it from the front end. Push and store data in my own backend