exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(() => {
      // Inserts seed entries
      return knex('businesses').insert([
        { id: 101, name: 'Starbucks', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 102, name: 'Gong Cha', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 103, name: 'Eb Games', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 104, name: 'French Tart', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 105, name: 'Robert Harris', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 106, name: 'Cinnamon Cafe', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 107, name: 'Nike', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 108, name: 'Countdown', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 109, name: 'Air New Zealand', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 110, name: 'Riverside Cafe', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 111, name: 'Milk & Honey Cafe', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 112, name: 'Subway', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 113, name: 'Jetstar', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 114, name: 'Mitre 10', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' },
        { id: 115, name: 'BP', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' }
      ])
    })
}
