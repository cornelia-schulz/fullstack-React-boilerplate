const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne
}

function getAll() {
  return db('cats')
  .select()
}

function getOne(id) {
  return db('cats')
  .where('id', id)
  .select()
}

function createNew(newCat){
  return db('cats')
  .insert(newCat)
}

function updateOne(updatedCat){
  return db('cats')
  .update(updatedCat)
}

function deleteOne(id){
  return db('cats')
  .where('id', id)
  .delete()
}