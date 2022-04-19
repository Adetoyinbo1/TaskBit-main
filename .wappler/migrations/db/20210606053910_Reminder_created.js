
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Reminder', function (table) {
      table.increments('id');
      table.text('ReminderText');
      table.integer('CompanyId').unsigned();
      table.foreign('CompanyId').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('EmployeeId').unsigned();
      table.foreign('EmployeeId').references('id').inTable('Employees').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('TaskId').unsigned();
      table.foreign('TaskId').references('id').inTable('Tasks').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('ProcessId').unsigned();
      table.foreign('ProcessId').references('id').inTable('Process').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('EventId').unsigned();
      table.foreign('EventId').references('id').inTable('Events').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('TaskTitle');
      table.text('EventTitle');
      table.text('ProcessTitle');
      table.timestamp('Created_Date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Reminder')
};
