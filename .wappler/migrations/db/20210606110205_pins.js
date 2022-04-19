
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Pins', function (table) {
      table.increments('id');
      table.integer('EmployeeID').unsigned();
      table.foreign('EmployeeID').references('id').inTable('Employees').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('FounderID').unsigned();
      table.foreign('FounderID').references('id').inTable('Founder').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('TaskID').unsigned();
      table.foreign('TaskID').references('id').inTable('Tasks').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('ProcessID').unsigned();
      table.foreign('ProcessID').references('id').inTable('Process').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('EventID').unsigned();
      table.foreign('EventID').references('id').inTable('Events').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('TaskTitle');
      table.text('EventTitle');
      table.text('ProcessTitle');
      table.text('Type');
      table.timestamp('DueDate');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Pins')
};
