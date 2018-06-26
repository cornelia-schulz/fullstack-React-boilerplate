
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cats', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('age')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cats')
};
