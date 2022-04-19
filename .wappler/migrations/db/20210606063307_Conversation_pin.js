
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Conversation_Pin', function (table) {
      table.increments('id');
      table.integer('ConversationId').unsigned();
      table.foreign('ConversationId').references('id').inTable('Conversation').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('CreatorUsername');
      table.string('CreatorDepartment');
      table.string('Chat_Text');
      table.string('File_Url');
      table.string('File_name');
      table.string('File_path');
      table.string('Type');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Conversation_Pin')
};
