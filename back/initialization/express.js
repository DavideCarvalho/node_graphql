const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const cors = require('cors');

module.exports = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  
  consign()
  .include('middlewares')
  .then('models')
  .then('api')
  .then('routes')
  .into(app);
  
  return app;
}