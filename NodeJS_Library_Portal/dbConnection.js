const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1.27017/uca', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', () => {
  console.log('error while connecting');
});

db.once('open', () => {
  console.log('Connected to db');
});
