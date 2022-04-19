
exports.up = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.integer('CompanyId').unsigned();
      table.foreign('CompanyId').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('CreatorId(Founder)').unsigned();
      table.foreign('CreatorId(Founder)').references('id').inTable('Founder').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('CreatorId(Employee)').unsigned();
      table.foreign('CreatorId(Employee)').references('id').inTable('Employees');
      table.text('CreatorFirstName');
      table.text('CreatorLastName');
      table.text('CreatorDepartment');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.dropForeign('CompanyId');
      table.dropColumn('CompanyId');
      table.dropForeign('CreatorId(Founder)');
      table.dropColumn('CreatorId(Founder)');
      table.dropForeign('CreatorId(Employee)');
      table.dropColumn('CreatorId(Employee)');
      table.dropColumn('CreatorFirstName');
      table.dropColumn('CreatorLastName');
      table.dropColumn('CreatorDepartment');
    })
};
