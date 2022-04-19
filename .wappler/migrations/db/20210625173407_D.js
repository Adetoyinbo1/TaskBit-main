
exports.up = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.dropForeign('CreatorId(Employee)');
      table.dropColumn('CreatorId(Employee)');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.integer('CreatorId(Employee)').unsigned();
      table.foreign('CreatorId(Employee)').references('id').inTable('Employees');
    })
};
