const mongoose = require('mongoose');
const personModel = mongoose.model('Person');
const api = {};

const getPeople = async (obj, args, context, info) => {
  try {
    const people = await personModel.find();
    return people;
  } catch (e) {
    return e;
  }
}

const getPerson = async (obj, args, context, info) => {
  const person = await personModel.findOne( { cid:args.cid } )
  return person;
}

const addPerson = async (obj, args, context, info) => {
  try {
    const createdPerson = await personModel.create(args.person);
    return createdPerson;
  } catch (e) {
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