
exports.up = function(knex) {
  return knex.schema
    .table('public.Participants', function (table) {
      table.boolean('Online');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Participants', function (table) {
      table.dropColumn('Online');
    })
};
