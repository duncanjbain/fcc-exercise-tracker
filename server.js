const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

//  Set up mongoose connection to mongodb
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open', () => {
  console.log('mongoDB succesfully connected');
});

db.on('error', () => {
  console.error.bind(console, 'MongoDB connection error:');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running on Port ${server.address().port}`);
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});
