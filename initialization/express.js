const express = require('express');
const { ApolloEngine } = require ('apollo-engine');
const bodyParser = require('body-parser');
const consign = require('consign');
const cors = require('cors');
const compression = require('compression');
const mongoose = require("mongoose");
const app = express();

const apolloEngineOptions = {
  port: 8057,
  graphqlPaths: ['/login', '/people'],
  expressApp: app,
  launcherOptions: {
    startupTimeout: 3000,
  },
}

const onApolloEngineStart = () => {
  console.log('Listening!');
}

module.exports = () => {
  const engine = new ApolloEngine({
    apiKey: 'service:DavideCarvalho-Demolay:0oe2ZfdbsEoHV6mNXe8Zuw'
  })
  engine.listen(apolloEngineOptions, onApolloEngineStart);
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
  personModel.update(
    { name : 'Ted' },{
    cid: 1,
    name: 'root',
    password: 'root',
    isAdmin: true
  }, { upsert : true });
  
  return app;
}