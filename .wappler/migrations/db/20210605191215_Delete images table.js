
exports.up = function(knex) {
  return knex.schema
    .dropTable('public.images')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('public.images', function (table) {
      table.increments('id').primary().notNullable();
      table.string('image', 30);
      table.string('description', 20);
      table.string('category', 12);
      table.string('author', 18);
      table.date('date');
    })
};
