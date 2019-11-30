const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isEnabled: Boolean
});

const UsersModels = mongoose.model('Users', usersSchema);

UsersModels.findUsers = function() {
  UsersModels.find({}, (error, response) => {
    if (error) console.log('Error is: ' + error);
    if (response) {
      console.log('Success response is: ' + response);
    }
  });
};
