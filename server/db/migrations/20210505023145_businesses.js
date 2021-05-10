exports.up = (knex) => {
  return knex.schema.createTable('businesses', (table) => {
    table.increments('id').primary()
    table.string('business')
    table.string('userType')
    table.binary('password')
    table.string('address')
    table.integer('phoneNumber')
    table.string('email')
    table.string('logo') // if this is going to be a link then I would call it logo_url
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('businesses')
}
