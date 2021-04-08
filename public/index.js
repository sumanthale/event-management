const express = require('express');

const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/eventmanagment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserModel = {
  name: String,
  email: String,
};
const User = mongoose.model('User', UserModel);

const sumanth = new User({
  name: 'sumanth',
  email: 'sumanthale@gmail.com',
});

// sumanth.save();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('listening in port ' + port);
});
