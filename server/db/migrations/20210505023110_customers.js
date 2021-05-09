exports.up = (knex) => {
  return knex.schema.createTable('customers', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('userType')
    table.binary('hash')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('customers')
}
