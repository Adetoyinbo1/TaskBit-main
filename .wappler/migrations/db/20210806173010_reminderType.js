
exports.up = function(knex) {
  return knex.schema
    .table('public.Reminder', function (table) {
      table.renameColumn('TaskTitle', 'ReminderType');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Reminder', function (table) {
      table.renameColumn('ReminderType', 'TaskTitle');
    })
};
