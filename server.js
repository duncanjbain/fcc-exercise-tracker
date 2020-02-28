import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import AddUser from './controllers/AddUser';
import GetAllUsers from './controllers/GetAllUsers';
import GetUserLog from './controllers/GetUserLog';
import LogExercise from './controllers/LogExercise';

mongoose.Promise = global.Promise;

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

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/exercise/new-user', AddUser);
app.get('/api/exercise/users', GetAllUsers);
app.get('/api/exercise/log/:userId', GetUserLog);
app.post('/api/exercise/add', LogExercise);
