exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        { id: 901, name: 'Aaron', user_name: '', user_type: 'customer', hash: '' },
        { id: 902, name: 'Kent', user_name: '', user_type: 'customer', hash: '' },
        { id: 903, name: 'Nathan', user_name: '', user_type: 'customer', hash: '' },
        { id: 904, name: 'Nicole', user_name: '', user_type: 'customer', hash: '' },
        { id: 905, name: 'Sam', user_name: '', user_type: 'customer', hash: '' }
      ])
    })
}
