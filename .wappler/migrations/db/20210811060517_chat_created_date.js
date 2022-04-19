
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation_chats', function (table) {
      table.string('Created_date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation_chats', function (table) {
      table.dropColumn('Created_date');
    })
};
