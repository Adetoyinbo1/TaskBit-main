
exports.up = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.dropForeign('CreatorId(Founder)');
      table.dropColumn('CreatorId(Founder)');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.integer('CreatorId(Founder)').unsigned();
      table.foreign('CreatorId(Founder)').references('id').inTable('Founder');
    })
};
