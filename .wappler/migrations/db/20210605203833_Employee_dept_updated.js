
exports.up = function(knex) {
  return knex.schema
    .table('public.Employees', function (table) {
      table.text('Department');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Employees', function (table) {
      table.dropColumn('Department');
    })
};
