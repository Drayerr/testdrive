exports.up = function(knex) {
  return knex.schema.createTable('sgqs', function (table){
    table.string('sgq_id').primary()
    table.string('title').notNullable()
    table.string('type').notNullable()
    table.string('creator').notNullable()
    table.string('inf').notNullable()

    table.foreign('creator').references('id').inTable('users')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
