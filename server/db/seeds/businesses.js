exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(() => {
      // Inserts seed entries
      return knex('businesses').insert([
        { id: 101, business: 'Starbucks', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/starbucks.jpg' },
        { id: 102, business: 'Gong Cha', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/gong-char.jpg' },
        { id: 103, business: 'Eb Games', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/eb-games.jpg' },
        { id: 104, business: 'French Tart', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/french-tart.jpg' },
        { id: 105, business: 'Robert Harris', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/robert-harris.jpg' },
        { id: 106, business: 'Cinnamon Cafe', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/cinnamon-cafe.jpg' },
        { id: 107, business: 'Nike', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/nike.jpg' },
        { id: 108, business: 'Countdown', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/countdown.jpg' },
        { id: 109, business: 'Air New Zealand', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/air-nz.jpg' },
        { id: 110, business: 'Riverside Cafe', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/riverside-cafe.jpg' },
        { id: 111, business: 'Milk & Honey Cafe', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/milk-honey.jpg' },
        { id: 112, business: 'Subway', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/subway.jpg' },
        { id: 113, business: 'Jetstar', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/jetstar.jpg' },
        { id: 114, business: 'Mitre 10', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/mitre10.jpg' },
        { id: 115, business: 'BP', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/bp.jpg' }
      ])
    })
}
