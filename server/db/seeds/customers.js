exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        { id: 901, name: 'Aaron', username: 'Aaron', user_type: 'customer', password: '' },
        { id: 902, name: 'Kent', username: 'Kent', user_type: 'customer', password: '' },
        { id: 903, name: 'Nathan', username: 'Nathan', user_type: 'customer', password: '' },
        { id: 904, name: 'Nicole', username: 'Nicole', user_type: 'customer', password: '' },
        { id: 905, name: 'Sam', username: 'Sam', user_type: 'customer', password: '' }
      ])
    })
}
