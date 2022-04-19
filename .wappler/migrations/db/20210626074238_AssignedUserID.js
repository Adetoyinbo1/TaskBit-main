
exports.up = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.integer('AssignedUserID').unsigned();
      table.foreign('AssignedUserID').references('id').inTable('Users').onUpdate('SET NULL').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Process', function (table) {
      table.dropForeign('AssignedUserID');
      table.dropColumn('AssignedUserID');
    })
};
