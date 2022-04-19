
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.boolean('Conversation_closed');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.dropColumn('Conversation_closed');
    })
};
