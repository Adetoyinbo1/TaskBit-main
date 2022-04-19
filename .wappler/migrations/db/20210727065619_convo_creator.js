
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.integer('Creator').unsigned();
      table.foreign('Creator').references('id').inTable('Users').onUpdate('SET NULL').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.dropForeign('Creator');
      table.dropColumn('Creator');
    })
};
