
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Companies_users', function (table) {
      table.increments('id');
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('Users').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('CompanyId').unsigned();
      table.foreign('CompanyId').references('id').inTable('Company_Account').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Companies_users')
};
