
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Employees', function (table) {
      table.increments('id');
      table.text('UserName');
      table.text('FirstName');
      table.text('LastName');
      table.text('Password');
      table.integer('Company').unsigned();
      table.foreign('Company').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
      table.boolean('CreateTeamTask');
      table.boolean('CreateTeamEvents');
      table.boolean('CreateCompanyAccounts');
      table.timestamp('Created_date');
      table.timestamp('Last_Updated');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Employees')
};
