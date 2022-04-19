
exports.up = function(knex) {
  return knex.schema
    .dropTable('public.users')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('public.users', function (table) {
      table.increments('id').primary().notNullable();
      table.string('first_name', 8);
      table.string('last_name', 10);
      table.string('gender', 6);
      table.string('email', 25);
      table.string('company', 29);
      table.string('avatar', 25);
    })
};
