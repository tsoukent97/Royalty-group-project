exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        { id: 901, name: 'Aaron', username: '', user_type: 'customer', hash: '' },
        { id: 902, name: 'Kent', username: '', user_type: 'customer', hash: '' },
        { id: 903, name: 'Nathan', username: '', user_type: 'customer', hash: '' },
        { id: 904, name: 'Nicole', username: '', user_type: 'customer', hash: '' },
        { id: 905, name: 'Sam', username: '', user_type: 'customer', hash: '' }
      ])
    })
}
