
exports.up = function(knex) {
  return knex.schema
    .table('public.Participants', function (table) {
      table.integer('UserId').unsigned();
      table.foreign('UserId').references('id').inTable('Users');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Participants', function (table) {
      table.dropForeign('UserId');
      table.dropColumn('UserId');
    })
};
