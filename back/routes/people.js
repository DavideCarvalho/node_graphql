const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress } = require('graphql-server-express');

module.exports = (app) => {
  const resolvers = app.api.people;
  console.log(resolvers);
  const typeDefs = `
    type Person {
      id: ID!
      name: String!
    }

    type Query {
      people: [Person!]
      person(id: Int): Person!
    }
  `;

  schema = makeExecutableSchema({typeDefs, resolvers})
  app.use('/people', graphqlExpress({schema}));
}