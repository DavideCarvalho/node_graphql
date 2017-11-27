const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress } = require('graphql-server-express');

module.exports = (app) => {
  const resolvers = app.api.people;
  const typeDefs = `
    type Person {
      cid: String
      name: String
      username: String
      password: String
      isAdmin: Boolean
    }

    input PersonInput {
      cid: String
      name: String!
      username: String!
      password: String!
      isAdmin: Boolean!
    }

    type Query {
      people: [Person]
      person(cid: String!): Person
    }

    type Mutation {
      addPerson(person: PersonInput!): Person
      deletePerson(cid: String!): Boolean
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