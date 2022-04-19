
exports.up = function(knex) {
  return knex.schema
    .table('public.Users', function (table) {
      table.timestamp('CreatedDate');
      table.timestamp('UpdatedDate');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Users', function (table) {
      table.dropColumn('CreatedDate');
      table.dropColumn('UpdatedDate');
    })
};
