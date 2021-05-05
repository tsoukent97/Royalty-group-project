exports.up = (knex) => {
  return knex.schema.createTable('customers', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('user_type')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('customers')
}
