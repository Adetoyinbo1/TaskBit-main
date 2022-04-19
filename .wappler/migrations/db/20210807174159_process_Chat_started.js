
exports.up = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.boolean('Chat_started');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.dropColumn('Chat_started');
    })
};
