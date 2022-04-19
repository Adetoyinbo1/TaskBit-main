
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Users', function (table) {
      table.increments('id');
      table.text('FirstName');
      table.text('LastName');
      table.text('Email');
      table.text('Pasword');
      table.text('Role');
      table.integer('Company').unsigned();
      table.foreign('Company').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('Department');
      table.boolean('Create_Update_team_Tasks');
      table.boolean('Create_Update_team_Events');
      table.boolean('Account_settings_and_subscription');
      table.boolean('Company_founder');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Users')
};
