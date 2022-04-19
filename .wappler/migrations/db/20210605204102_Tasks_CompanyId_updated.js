
exports.up = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.integer('CompanyId').unsigned();
      table.foreign('CompanyId').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.dropForeign('CompanyId');
      table.dropColumn('CompanyId');
    })
};
