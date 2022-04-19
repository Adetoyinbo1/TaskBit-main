
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation_chats', function (table) {
      table.datetime('Creation_date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation_chats', function (table) {
      table.dropColumn('Creation_date');
    })
};
