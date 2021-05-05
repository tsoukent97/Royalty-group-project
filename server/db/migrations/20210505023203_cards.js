exports.up = (knex) => {
  return knex.schema.createTable('cards', (table) => {
    table.integer('customer_id')
    table.integer('business_id')
    table.integer('stamp_count')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('cards')
}
