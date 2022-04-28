
exports.up = function(knex) {
  return knex.schema
    .table('Users', function (table) {
      table.boolean('EmailVerified');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Users', function (table) {
      table.dropColumn('EmailVerified');
    })
};
