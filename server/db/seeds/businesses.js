exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(() => {
      // Inserts seed entries
      return knex('businesses').insert([
        { id: 101, business: 'Starbucks', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 102, business: 'Gong Cha', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 103, business: 'Eb Games', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 104, business: 'French Tart', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 105, business: 'Robert Harris', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 106, business: 'Cinnamon Cafe', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 107, business: 'Nike', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 108, business: 'Countdown', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 109, business: 'Air New Zealand', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 110, business: 'Riverside Cafe', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 111, business: 'Milk & Honey Cafe', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 112, business: 'Subway', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 113, business: 'Jetstar', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 114, business: 'Mitre 10', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' },
        { id: 115, business: 'BP', userType: 'business', password: '', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com' }
      ])
    })
}
