
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Conversation_chats', function (table) {
      table.increments('id');
      table.integer('ConversationId').unsigned();
      table.foreign('ConversationId').references('id').inTable('Conversation').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('CreatorId(Founder)').unsigned();
      table.foreign('CreatorId(Founder)').references('id').inTable('Founder').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('CreatorId(Employee)').unsigned();
      table.foreign('CreatorId(Employee)').references('id').inTable('Employees');
      table.text('CreatorUsername');
      table.text('CreatorDepartment');
      table.string('PinId');
      table.text('ChatText');
      table.text('FileUrl');
      table.text('FileName');
      table.text('FilePath');
      table.text('Chat_Type');
      table.text('CreatorImgUrl');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Conversation_chats')
};
