
exports.up = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.datetime('EventStartDate');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.dropColumn('EventStartDate');
    })
};
