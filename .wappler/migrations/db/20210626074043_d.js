
exports.up = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.dropForeign('AssignedEmployeeId');
      table.dropColumn('AssignedEmployeeId');
      table.dropColumn('AssignedEmployeeFirstName');
      table.dropColumn('AssignedEmployeeLastName');
      table.dropColumn('AssignedEmployeeImgUrl');
      table.dropColumn('AssignedEmployeeDepartment');
      table.dropForeign('CreatorId(Founder)');
      table.dropColumn('CreatorId(Founder)');
      table.dropForeign('CreatorId(Employee)');
      table.dropColumn('CreatorId(Employee)');
      table.dropForeign('CompanyId');
      table.dropColumn('CompanyId');
      table.dropColumn('CreatorFirstName');
      table.dropColumn('CreatorLastName');
      table.dropColumn('CreatorDepartment');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.integer('AssignedEmployeeId').unsigned();
      table.foreign('AssignedEmployeeId').references('id').inTable('Employees');
      table.text('AssignedEmployeeFirstName');
      table.text('AssignedEmployeeLastName');
      table.text('AssignedEmployeeImgUrl');
      table.text('AssignedEmployeeDepartment');
      table.integer('CreatorId(Founder)').unsigned();
      table.foreign('CreatorId(Founder)').references('id').inTable('Founder');
      table.integer('CreatorId(Employee)').unsigned();
      table.foreign('CreatorId(Employee)').references('id').inTable('Employees');
      table.integer('CompanyId').unsigned();
      table.foreign('CompanyId').references('id').inTable('Company_Account');
      table.text('CreatorFirstName');
      table.text('CreatorLastName');
      table.text('CreatorDepartment');
    })
};
