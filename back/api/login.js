const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const personModel = mongoose.model('Person');
const api = {};

const doLogin = async (obj, args, context, info) => {
  try {
    const person = await personModel.findOne({
      login: args.login.username,
      password: args.login.password
    })
    return person;
  } catch (e) {
    return e;
  }
}

api.Query = {
  login: doLogin
}

module.exports = api;