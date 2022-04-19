
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Chats_attachments', function (table) {
      table.increments('id');
      table.integer('Chat_msg_id').unsigned();
      table.foreign('Chat_msg_id').references('id').inTable('Conversation_chats').onUpdate('SET NULL').onDelete('SET NULL');
      table.text('FileUrl');
      table.text('FileName');
      table.text('FilePath');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Chats_attachments')
};
