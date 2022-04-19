
exports.up = function(knex) {
  return knex.schema
    .table('public.Company_Account', function (table) {
      table.text('Stripe_customer_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Company_Account', function (table) {
      table.dropColumn('Stripe_customer_id');
    })
};
