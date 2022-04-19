
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.boolean('Closed').defaultTo('0');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.dropColumn('Closed');
    })
};
