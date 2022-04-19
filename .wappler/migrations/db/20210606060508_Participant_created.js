
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Participants', function (table) {
      table.increments('id');
      table.integer('EmployeeId').unsigned();
      table.foreign('EmployeeId').references('id').inTable('Employees').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('FounderId').unsigned();
      table.foreign('FounderId').references('id').inTable('Founder').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('ConversationId').unsigned();
      table.foreign('ConversationId').references('id').inTable('Conversation').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('ParticipantUsername');
      table.text('ParticipantImgUrl');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Participants')
};
