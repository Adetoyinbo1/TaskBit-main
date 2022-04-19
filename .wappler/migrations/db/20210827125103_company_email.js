
exports.up = function(knex) {
  return knex.schema
    .table('public.Company_Account', function (table) {
      table.text('Company_email');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Company_Account', function (table) {
      table.dropColumn('Company_email');
    })
};
