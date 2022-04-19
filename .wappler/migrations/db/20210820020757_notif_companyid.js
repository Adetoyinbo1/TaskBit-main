
exports.up = function(knex) {
  return knex.schema
    .table('public.Notification', function (table) {
      table.integer('Company_id').unsigned();
      table.foreign('Company_id').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Notification', function (table) {
      table.dropForeign('Company_id');
      table.dropColumn('Company_id');
    })
};
