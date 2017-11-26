const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress } = require('graphql-server-express');

module.exports = (app) => {
  const resolvers = app.api.people;
  const typeDefs = `
    type Person {
      id: String
      name: String!
    }

    input PersonInput {
      id: String
      name: String!
    }

    type Query {
      people: [Person]
      person(id: String!): Person
    }

    type Mutation {
      addPerson(person: PersonInput!): Person
      deletePerson(id: String!): Boolean
      updatePerson(person: PersonInput!): Person
    }
  `;

  schema = makeExecutableSchema({typeDefs, resolvers})
  app.use('/people', graphqlExpress({schema}));
}