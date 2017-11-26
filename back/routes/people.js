const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress } = require('graphql-server-express');

module.exports = (app) => {
  const resolvers = app.api.people;
  const typeDefs = `
    type Person {
      id: String
      name: String
      username: String
      password: String
    }

    input PersonInput {
      id: String
      name: String!
      username: String!
      password: String!
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

  const schema = makeExecutableSchema({typeDefs, resolvers})
  app.use('/people', graphqlExpress((req,res) => (
    {
      schema,
      context: { req, res }
    })));
}