
exports.up = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.renameColumn('EventType', 'Description');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.renameColumn('Description', 'EventType');
    })
};
