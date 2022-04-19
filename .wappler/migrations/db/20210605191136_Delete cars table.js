
exports.up = function(knex) {
  return knex.schema
    .dropTable('public.cars')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('public.cars', function (table) {
      table.increments('id').primary().notNullable();
      table.string('make', 10);
      table.string('model', 12);
      table.integer('year');
    })
};
