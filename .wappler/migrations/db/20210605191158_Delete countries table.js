
exports.up = function(knex) {
  return knex.schema
    .dropTable('public.countries')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('public.countries', function (table) {
      table.increments('id').primary().notNullable();
      table.string('country_code', 2);
      table.string('country_name', 38);
    })
};
