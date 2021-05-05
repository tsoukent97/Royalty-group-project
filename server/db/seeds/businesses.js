exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(() => {
      // Inserts seed entries
      return knex('businesses').insert([
        { id: 101, name: 'Starbucks', user_type: 'business' },
        { id: 102, name: 'Gong_Cha', user_type: 'business' },
        { id: 103, name: 'Eb_Games', user_type: 'business' },
        { id: 104, name: 'French_Tart', user_type: 'business' },
        { id: 105, name: 'Robert_Harris', user_type: 'business' },
        { id: 106, name: 'Cinnamon_Cafe', user_type: 'business' },
        { id: 107, name: 'Kent_One', user_type: 'business' },
        { id: 108, name: 'Kent_Two', user_type: 'business' },
        { id: 109, name: 'Knet_Three', user_type: 'business' },
        { id: 110, name: 'Riverside_Cafe', user_type: 'business' },
        { id: 111, name: 'Milk_&_Honey_Cafe', user_type: 'business' },
        { id: 112, name: 'Subway', user_type: 'business' },
        { id: 113, name: 'Sam_One', user_type: 'business' },
        { id: 114, name: 'Sam_Two', user_type: 'business' },
        { id: 115, name: 'Sam_Three', user_type: 'business' }
      ])
    })
}
