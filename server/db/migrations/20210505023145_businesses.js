exports.up = (knex) => {
  return knex.schema.createTable('businesses', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('user_type')
    table.binary('hash')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('businesses')
}
