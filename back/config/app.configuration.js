const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const verifyToken = promisify(jwt.verify);
const MY_SECRET = 'secret';

module.exports = () => {
  const app = express();
  app.use(bodyParser.json());
  
  app.use(async (req, res, next) => {
    console.log(req.originalUrl);
    if (req.originalUrl !== '/login') {
      if (!req.headers.bearer) {
        throw new Error('No Authentication Token Provided')
      }
      const token = req.headers.bearer;
      try {
        const data = await jwt.verify(token, MY_SECRET);
        next();
      } catch (e) {
        console.log(e);
        res.status(400).json({error:'JWT expired'})
      }
    }
    next();
  });
  
  consign()
  .then('models')
  .include('api')
  .then('routes')
  .into(app);
  
  return app;
}