const mongoose = require('mongoose');
const personModel = mongoose.model('Person');
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

const getPeople = async (obj, args, context, info) => {
  try {
    const people = await personModel.find();
    return people;
  } catch (e) {
    return e;
  }
}

const getPerson = async (obj, args, context, info) => {
  const person = await personModel.findOne( { _id:args.id } )
  return person;
}

const addPerson = async (obj, args, context, info) => {
  try {
    const createdPerson = await personModel.create(args.person);
    console.log(createdPerson);
    return createdPerson;
  } catch (e) {

    console.log('deu pau');
    return e;
  }
}

const deletePersonById = async (obj, args, context, info) => {
  try {
    await personModel.findByIdAndRemove( args.id )
    return true;
  } catch (e) {
    return e;
  }
}

const updatePersonById = async (obj, args, context, info) => {
  try {
    const updatedPerson = await personModel.findByIdAndUpdate(args.person.id, args.person)
    return args.person;
  } catch (e) {
    return e;
  }
}

api.Query = {
  people: getPeople,
  person: getPerson
}

api.Mutation = {
  addPerson: addPerson,
  deletePerson: deletePersonById,
  updatePerson: updatePersonById
}


module.exports = api;