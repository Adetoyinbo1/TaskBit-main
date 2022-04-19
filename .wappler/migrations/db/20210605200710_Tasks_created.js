
exports.up = function(knex) {
  return knex.schema
    .createTable('public.Tasks', function (table) {
      table.increments('id');
      table.text('TaskTitle');
      table.text('TaskParent(id)');
      table.timestamp('DueDate');
      table.text('Type');
      table.text('AvatarName');
      table.text('AvatarUrl');
      table.text('AvatarPath');
      table.integer('CreatorId(Founder)').unsigned();
      table.foreign('CreatorId(Founder)').references('id').inTable('Founder').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('CreatorId(Employee)').unsigned();
      table.foreign('CreatorId(Employee)').references('id').inTable('Employees').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('CreatorFirstName');
      table.text('CreatorLasttName');
      table.text('CreatorDepartment');
      table.text('CreatorImgUrl');
      table.timestamp('Date_Created');
      table.timestamp('Last_updated');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('public.Tasks')
};
