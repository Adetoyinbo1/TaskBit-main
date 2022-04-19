
exports.up = function(knex) {
  return knex.schema
    .table('public.Event_invites', function (table) {
      table.integer('UserId').unsigned();
      table.foreign('UserId').references('id').inTable('Users').onUpdate('SET NULL').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Event_invites', function (table) {
      table.dropForeign('UserId');
      table.dropColumn('UserId');
    })
};
