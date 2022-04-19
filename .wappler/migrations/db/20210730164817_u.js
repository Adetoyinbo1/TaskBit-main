
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.integer('Conversation_pinned_message_id').unsigned();
      table.foreign('Conversation_pinned_message_id').references('id').inTable('Conversation_chats').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.dropForeign('Conversation_pinned_message_id');
      table.dropColumn('Conversation_pinned_message_id');
    })
};
