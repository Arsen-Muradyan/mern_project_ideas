const mongoose = require('mongoose');
const config = require('config');
module.exports = function connect() {
  mongoose.connect(config.get('mongoURI'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on('open', () => {
    console.log("MongoDB Connected...");
  })
}