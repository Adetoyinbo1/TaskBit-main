
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Events', function (table) {
      table.increments('id');
      table.text('EventTitle');
      table.text('EventType');
      table.timestamp('EventDate');
      table.timestamp('Created_date');
      table.timestamp('Last_updated');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Events')
};
