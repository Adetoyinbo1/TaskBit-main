
exports.up = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.integer('Companyid').unsigned();
      table.foreign('Companyid').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.dropForeign('Companyid');
      table.dropColumn('Companyid');
    })
};
