const express = require('express');
const { Engine } = require ('apollo-engine');
const bodyParser = require('body-parser');
const consign = require('consign');
const cors = require('cors');
const compression = require('compression');
const mongoose = require("mongoose");

module.exports = () => {
  const app = express();
  const engine = new Engine({ 
    engineConfig: { 
      apiKey: 'service:DavideCarvalho-Demolay:0oe2ZfdbsEoHV6mNXe8Zuw',
      logging: {
        level: 'DEBUG'
      }
    },
    graphqlPort: 8057,
    endpoint: '/login',
    dumpTraffic: true
  });
  engine.start();
  const enginePeople = new Engine({ 
    engineConfig: { 
      apiKey: 'service:DavideCarvalho-Demolay:0oe2ZfdbsEoHV6mNXe8Zuw',
      logging: {
        level: 'DEBUG'
      }
    },
    graphqlPort: 8057,
    endpoint: '/people',
    dumpTraffic: true
  });
  enginePeople.start();
  app.use(engine.expressMiddleware());
  app.use(enginePeople.expressMiddleware());
  app.use(bodyParser.json());
  app.use(cors());
  app.use(compression());
  
  consign()
  .include('middlewares')
  .then('models')
  .then('graphql')
  .then('api')
  .then('routes')
  .into(app);

  const personModel = mongoose.model("Person");
  personModel.create({
    cid: 1,
    name: 'root',
    password: 'root',
    isAdmin: true
  });
  
  return app;
}