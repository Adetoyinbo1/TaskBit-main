
exports.up = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.string('Conversation_pinned_msg_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('public.Conversation', function (table) {
      table.dropColumn('Conversation_pinned_msg_id');
    })
};
