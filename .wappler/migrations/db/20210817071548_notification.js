
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Notification', function (table) {
      table.increments('id');
      table.integer('Conversationi_id').unsigned();
      table.foreign('Conversationi_id').references('id').inTable('Conversation').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('Task_id').unsigned();
      table.foreign('Task_id').references('id').inTable('Tasks').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('Reminder_id').unsigned();
      table.foreign('Reminder_id').references('id').inTable('Reminder').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('Event_id').unsigned();
      table.foreign('Event_id').references('id').inTable('Events').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('Creator_id').unsigned();
      table.foreign('Creator_id').references('id').inTable('Users').onUpdate('SET NULL').onDelete('SET NULL');
      table.text('Notification_text');
      table.integer('Notified_user_id').unsigned();
      table.foreign('Notified_user_id').references('id').inTable('Users').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('Creation_date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Notification')
};
