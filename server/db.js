const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getAll,
  getOne
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

