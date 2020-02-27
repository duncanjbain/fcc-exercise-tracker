const express = require('express');

const app = express();

require('dotenv').config();

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running on Port ${server.address().port}`);
});

app.get('/', (req,res) => {
  res.send('Hello world!');
});
