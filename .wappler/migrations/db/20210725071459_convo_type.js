
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.string('Type');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.dropColumn('Type');
    })
};
