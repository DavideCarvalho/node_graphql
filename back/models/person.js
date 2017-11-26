const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

mongoose.model('Person', personSchema);