const mongoose = require('mongoose');

const posicao = mongoose.Schema({
  dateTime: {
    type: Date,
    default: Date.now,
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

mongoose.model('Posicao', posicao);