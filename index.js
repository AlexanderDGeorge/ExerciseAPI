const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.listen(5000, () => {
  console.log('listening on port 5000')
});

