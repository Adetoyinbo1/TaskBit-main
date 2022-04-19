
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Founder', function (table) {
      table.increments('id');
      table.text('UserName');
      table.text('FirstName');
      table.text('LastName');
      table.text('Email');
      table.text('Password');
      table.timestamp('Created_date');
      table.timestamp('Last_Updated');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Founder')
};
