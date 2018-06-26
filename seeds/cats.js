
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {id: 1, name: 'Minka', age: 3},
        {id: 2, name: 'Morle', age: 7},
        {id: 3, name: 'Rapunzel', age: 5}
      ]);
    });
};
