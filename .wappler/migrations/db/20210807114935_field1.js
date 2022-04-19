
exports.up = function(knex) {
  return knex.schema
    .table('public.test', function (table) {
      table.string('field1');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.test', function (table) {
      table.dropColumn('field1');
    })
};
