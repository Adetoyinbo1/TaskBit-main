
exports.up = function(knex) {
  return knex.schema
    .table('public.Users', function (table) {
      table.text('imgUrl');
      table.text('imgName');
      table.text('imgPath');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Users', function (table) {
      table.dropColumn('imgUrl');
      table.dropColumn('imgName');
      table.dropColumn('imgPath');
    })
};
