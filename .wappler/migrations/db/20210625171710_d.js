
exports.up = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.dropColumn('TaskParent(id)');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.text('TaskParent(id)');
    })
};
