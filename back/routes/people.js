const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress } = require('graphql-server-express');

module.exports = (app) => {
  const resolvers = app.api.people;
  let typeDefs = '';
  typeDefs += app.graphql.types.person;
  typeDefs += app.graphql.inputs.person;

  typeDefs += `
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