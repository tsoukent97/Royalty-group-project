exports.up = (knex) => {
  return knex.schema.createTable('customers', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('userType')
    table.binary('password')
    //I would have thought this should be a string, did the passport docs say to make it binary?
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('customers')
}
