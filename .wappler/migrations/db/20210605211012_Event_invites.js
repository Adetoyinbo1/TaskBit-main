
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Event_invites', function (table) {
      table.increments('id');
      table.integer('InvitedEmployeeid').unsigned();
      table.foreign('InvitedEmployeeid').references('id').inTable('Employees');
      table.integer('EventId').unsigned();
      table.foreign('EventId').references('id').inTable('Events').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('InvitedEmployeeFirstName');
      table.text('InvitedEmployeeLastName');
      table.text('InvitedEmployeeDepartment');
      table.text('InvitedEmployeeImgUrl');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Event_invites')
};
