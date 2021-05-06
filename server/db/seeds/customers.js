exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        { id: 901, name: 'Aaron', user_type: 'customer', hash: 'password' },
        { id: 902, name: 'Kent', user_type: 'customer', hash: 'password' },
        { id: 903, name: 'Nathan', user_type: 'customer', hash: 'password' },
        { id: 904, name: 'Nicole', user_type: 'customer', hash: 'password' },
        { id: 905, name: 'Sam', user_type: 'customer', hash: 'password' }
      ])
    })
}
