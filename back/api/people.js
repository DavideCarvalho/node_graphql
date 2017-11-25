const api = {};
const people = [
  {
    id: 1,
    name: 'Gabriel Segers'
  },
  {
    id: 2,
    name: 'Davi de Carvalho'
  },
];

const getPeople = (obj, args, context, info) => people

const getPerson = (obj, args, context, info) => {
  const person = people.filter(person => person.id === args.id );
  return person[0];
}

api.Query = {
  people: getPeople,
  person: getPerson
}


module.exports = api;