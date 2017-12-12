const express = require('express');
const connect = require('connect');

const bodyParser = require('body-parser');
const consign = require('consign');
const cors = require('cors');

module.exports = () => {
  const app = connect();
  app.use(bodyParser.json());
  app.use(cors());
  
  consign()
  .include('middlewares')
  .then('models')
  .then('graphql')
  .then('api')
  .then('routes')
  .into(app);
  
  return app;
}