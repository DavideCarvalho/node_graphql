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
    !person ? throwErrorNotFound() : ''
    const token = jwt.sign( { bearer: person }, MY_SECRET, { expiresIn: '1d' });
    res.setHeader('Access-Control-Expose-Headers', 'authentication');
    res.setHeader('authentication', token);
    return person;
  } catch (e) {
    return e;
  }
}

api.Query = {
  login: doLogin
}

const throwErrorNotFound = () => {
  throw new Error('UserNotFoundError')
}

module.exports = api;