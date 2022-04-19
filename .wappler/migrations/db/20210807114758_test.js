
exports.up = function(knex) {
  return knex.schema
    .createTable('public.test', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.test')
};
