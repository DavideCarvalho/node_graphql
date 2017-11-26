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
  app.use('/login', graphqlExpress(request => ({
    schema,
    context: {
      headers: request.headers,
      /*enviroment_variables: process.env*/
    },
  })));
}