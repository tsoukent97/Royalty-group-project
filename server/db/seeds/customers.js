exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        { id: 901, username: 'Aaron', userType: 'customer', password: '' },
        { id: 902, username: 'Kent', userType: 'customer', password: '' },
        { id: 903, username: 'Nathan', userType: 'customer', password: '' },
        { id: 904, username: 'Nicole', userType: 'customer', password: '' },
        { id: 905, username: 'Sam', userType: 'customer', password: '' }
      ])
    })
}
