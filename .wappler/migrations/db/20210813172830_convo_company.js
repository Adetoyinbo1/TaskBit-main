
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.integer('Companyid').unsigned();
      table.foreign('Companyid').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.dropForeign('Companyid');
      table.dropColumn('Companyid');
    })
};
