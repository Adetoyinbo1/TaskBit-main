
exports.up = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.text('CreatorImgUrl');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Events', function (table) {
      table.dropColumn('CreatorImgUrl');
    })
};
