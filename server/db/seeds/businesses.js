exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(() => {
      // Inserts seed entries
      return knex('businesses').insert([
        { id: 101, business: 'Starbucks', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/starbucks.png' },
        { id: 102, business: 'Gong Cha', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/gong-char.png' },
        { id: 104, business: 'French Tart', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/french-tart.png' },
        { id: 105, business: 'Robert Harris', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/robert-harris.png' },
        { id: 106, business: 'Cinnamon Cafe', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/cinnamon-cafe.png' },
        { id: 107, business: 'Nike', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/nike.png' },
        { id: 108, business: 'Countdown', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/countdown.png' },
        { id: 109, business: 'Air New Zealand', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/air-nz.png' },
        { id: 110, business: 'Riverside Cafe', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/riverside-cafe.png' },
        { id: 111, business: 'Milk & Honey Cafe', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/milk-honey.png' },
        { id: 112, business: 'Subway', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/subway.png' },
        { id: 113, business: 'Jetstar', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/jetstar.png' },
        { id: 114, business: 'Mitre 10', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/mitre10.png' },
        { id: 115, business: 'BP', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/bp.png' }
      ])
    })
}
