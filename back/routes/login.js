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
    cid: String
    name: String
    password: String
    isAdmin: Boolean
  }

  input LoginInput {
    cid: String!
    password: String!
  }

  type LoginResponse {
    person: Person
    authentication: String
  }
  
  type Query {
    login(login: LoginInput): LoginResponse
  }
  `;
  const schema = makeExecutableSchema({typeDefs, resolvers});
  app.use('/login', graphqlExpress((req,res) => ({
    schema,
    context: { req, res },
  })));
}