const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = () => {
  const app = express();
  app.use(bodyParser.json());
  
  consign()
  .include('middlewares')
  .then('models')
  .then('api')
  .then('routes')
  .into(app);
  
  return app;
}