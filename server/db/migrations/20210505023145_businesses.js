exports.up = (knex) => {
  return knex.schema.createTable('businesses', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('user_type')
    table.binary('password')
    table.string('address')
    table.integer('phone_number')
    table.string('email')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('businesses')
}
