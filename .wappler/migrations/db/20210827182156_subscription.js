
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Subscriptions', function (table) {
      table.increments('id');
      table.string('Subscription_id');
      table.string('Account_customer_id');
      table.timestamp('Current_period_end');
      table.string('Subscription_status');
      table.integer('Company_id').unsigned();
      table.foreign('Company_id').references('id').inTable('Company_Account');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Subscriptions')
};
