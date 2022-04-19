
exports.up = function(knex) {
  return knex.schema
    .createTable('public.images', function (table) {
      table.increments('id');
      table.integer('task').unsigned();
      table.foreign('task').references('id').inTable('Tasks').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('user').unsigned();
      table.foreign('user').references('id').inTable('Users').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('url');
      table.text('path');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.images')
};
