
exports.up = function(knex) {
  return knex.schema
    .table('public.Reminder', function (table) {
      table.text('RemiderTitle');
      table.integer('Creator').unsigned();
      table.foreign('Creator').references('id').inTable('Users').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('Date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Reminder', function (table) {
      table.dropColumn('RemiderTitle');
      table.dropForeign('Creator');
      table.dropColumn('Creator');
      table.dropColumn('Date');
    })
};
