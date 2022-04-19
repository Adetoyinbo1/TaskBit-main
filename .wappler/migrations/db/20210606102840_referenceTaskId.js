
exports.up = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.integer('ReferenceTaskId').unsigned();
      table.foreign('ReferenceTaskId').references('id').inTable('Tasks').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Tasks', function (table) {
      table.dropForeign('ReferenceTaskId');
      table.dropColumn('ReferenceTaskId');
    })
};
