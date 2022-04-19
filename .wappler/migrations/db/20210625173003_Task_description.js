
exports.up = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.text('Task_description');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.dropColumn('Task_description');
    })
};
