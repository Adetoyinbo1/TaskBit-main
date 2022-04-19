
exports.up = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.datetime('Final_date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.dropColumn('Final_date');
    })
};
