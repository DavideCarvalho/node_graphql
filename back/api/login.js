const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const personModel = mongoose.model('Person');
const MY_SECRET = 'secret';
const api = {};

const doLogin = async (obj, args, { req, res }, info) => {
  try {
    const person = await personModel.findOne({
      cid: args.login.cid,
      password: args.login.password
    })
    const token = jwt.sign(
      { 
        bearer: person
      }, MY_SECRET, {
        expiresIn: '1d'
      });
    res.set('authentication', token);
    const loginResponse = {
      person,
      authentication: token
    }
    return loginResponse;
  } catch (e) {
    return e;
  }
}

api.Query = {
  login: doLogin
}

module.exports = api;