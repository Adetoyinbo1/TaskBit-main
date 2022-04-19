
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Conversation', function (table) {
      table.increments('id');
      table.integer('TaskId').unsigned();
      table.foreign('TaskId').references('id').inTable('Tasks').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('ProcessId').unsigned();
      table.foreign('ProcessId').references('id').inTable('Process').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('CreatorId(Admin)').unsigned();
      table.foreign('CreatorId(Admin)').references('id').inTable('Founder').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('CreatorId(Employee)').unsigned();
      table.foreign('CreatorId(Employee)').references('id').inTable('Employees');
      table.text('CreatorUsername');
      table.text('TaskTitle');
      table.text('ProcessTitle');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Conversation')
};
