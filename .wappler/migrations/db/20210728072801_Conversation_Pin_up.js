
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation_Pin', function (table) {
      table.integer('Pinner_id').unsigned();
      table.foreign('Pinner_id').references('id').inTable('Users').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('Msg_id').unsigned();
      table.foreign('Msg_id').references('id').inTable('Conversation_chats').onUpdate('SET NULL').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation_Pin', function (table) {
      table.dropForeign('Pinner_id');
      table.dropColumn('Pinner_id');
      table.dropForeign('Msg_id');
      table.dropColumn('Msg_id');
    })
};
