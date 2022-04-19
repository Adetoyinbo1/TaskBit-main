
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Company_Account', function (table) {
      table.increments('id');
      table.text('CompanyName');
      table.integer('CompanyFounder').unsigned();
      table.foreign('CompanyFounder').references('id').inTable('Founder').onUpdate('CASCADE').onDelete('CASCADE');
      table.timestamp('Created_date');
      table.timestamp('Last_updated');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Company_Account')
};
