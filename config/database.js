const mongoose = require('mongoose');

module.exports = url => {

  mongoose.connect(`mongodb://${url}`);
  mongoose.connection.on('connected', () => console.log('MongoDB successfully connected'));
  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', () => console.log('MongoDB offline'));

  process.on('SIGINT', () => mongoose.connection.close(() => process.exit(0)));
}