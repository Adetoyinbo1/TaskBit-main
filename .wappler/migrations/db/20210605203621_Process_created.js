
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Process', function (table) {
      table.increments('id');
      table.text('ProcessTitle');
      table.timestamp('Due_date');
      table.integer('TaskId').unsigned();
      table.foreign('TaskId').references('id').inTable('Tasks').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('AssignedEmployeeId').unsigned();
      table.foreign('AssignedEmployeeId').references('id').inTable('Employees');
      table.text('AssignedEmployeeFirstName');
      table.text('AssignedEmployeeLastName');
      table.text('AssignedEmployeeImgUrl');
      table.text('AssignedEmployeeDepartment');
      table.integer('CreatorId(Founder)').unsigned();
      table.foreign('CreatorId(Founder)').references('id').inTable('Founder').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('CreatorId(Employee)').unsigned();
      table.foreign('CreatorId(Employee)').references('id').inTable('Employees');
      table.integer('CompanyId').unsigned();
      table.foreign('CompanyId').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('CreatorFirstName');
      table.text('CreatorLastName');
      table.text('CreatorDepartment');
      table.timestamp('Created_date');
      table.timestamp('Last_updated');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Process')
};
