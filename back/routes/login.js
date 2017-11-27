const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress } = require('graphql-server-express');

module.exports = (app) => {
  const resolvers = app.api.login;
  const typeDefs = `  
  type Login {
    username: String!
    password: String!
  }
  
  type Person {
    id: String
    name: String
    login: String
    password: String
    isAdmin: Boolean
  }
  
  input LoginInput {
    username: String!
    password: String!
  }
  
  type Query {
    login(login: LoginInput): Person
  }
  `;
  const schema = makeExecutableSchema({typeDefs, resolvers});
  //app.use('/login', graphqlExpress({schema}));
  app.use('/login', graphqlExpress((req,res) => ({
    schema,
    context: { req, res },
  })));
}