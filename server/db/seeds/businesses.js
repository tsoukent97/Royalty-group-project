exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(() => {
      // Inserts seed entries
      return knex('businesses').insert([
        { id: 101, name: 'Starbucks', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/starbucks.png' },
        { id: 102, name: 'Gong Cha', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/gong-char.png' },
        { id: 103, name: 'EB Games', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/eb-games.png' },
        { id: 104, name: 'French Tart', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/french-tart.png' },
        { id: 105, name: 'Robert Harris', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/robert-harris.png' },
        { id: 106, name: 'Cinnamon Cafe', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/cinnamon-cafe.png' },
        { id: 107, name: 'Nike', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/nike.png' },
        { id: 108, name: 'Countdown', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/countdown.png' },
        { id: 109, name: 'Air New Zealand', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/air-nz.png' },
        { id: 110, name: 'Riverside Cafe', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/riverside-cafe.png' },
        { id: 111, name: 'Milk & Honey Cafe', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/milk-honey.png' },
        { id: 112, name: 'Subway', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/subway.png' },
        { id: 113, name: 'Jetstar', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/jetstar' },
        { id: 114, name: 'Mitre 10', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/mitre10.png' },
        { id: 115, name: 'BP', user_type: 'business', hash: 'password', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com', logo: './images/bp.png' }
      ])
    })
}
