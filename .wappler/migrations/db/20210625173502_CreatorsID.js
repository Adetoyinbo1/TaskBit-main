
exports.up = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.integer('CreatorID').unsigned();
      table.foreign('CreatorID').references('id').inTable('Users');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.dropForeign('CreatorID');
      table.dropColumn('CreatorID');
    })
};
