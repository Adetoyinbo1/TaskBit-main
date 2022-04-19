
exports.up = function(knex) {
  return knex.schema
    .createTable('public.ProcessAttachments', function (table) {
      table.increments('id');
      table.integer('ProcessID').unsigned();
      table.foreign('ProcessID').references('id').inTable('Process').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('FileName');
      table.text('FileUrl');
      table.text('FilePath');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.ProcessAttachments')
};
