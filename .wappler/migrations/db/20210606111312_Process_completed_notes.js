
exports.up = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.boolean('Completed');
      table.text('Notes');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.dropColumn('Completed');
      table.dropColumn('Notes');
    })
};
