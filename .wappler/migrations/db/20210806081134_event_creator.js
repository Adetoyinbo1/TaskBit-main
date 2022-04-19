
exports.up = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.integer('Creator').unsigned();
      table.foreign('Creator').references('id').inTable('Users').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.dropForeign('Creator');
      table.dropColumn('Creator');
    })
};
