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

app.get('', async (req, res) => {
  // sumanth.save();

  const data = await User.find();
  res.send(data);
});
app.post('');

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('listening in port ' + port);
});
