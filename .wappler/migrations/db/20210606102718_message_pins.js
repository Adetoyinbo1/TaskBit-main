
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation_chats', function (table) {
      table.integer('Chat_pin_id').unsigned();
      table.foreign('Chat_pin_id').references('id').inTable('Chat_pins').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation_chats', function (table) {
      table.dropForeign('Chat_pin_id');
      table.dropColumn('Chat_pin_id');
    })
};
