exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(() => {
      // Inserts seed entries
      return knex('businesses').insert([
        { id: 101, name: 'Starbucks', usertype: 'business' },
        { id: 102, name: 'Gong_Cha', usertype: 'business' },
        { id: 103, name: 'Eb_Games', usertype: 'business' },
        { id: 104, name: 'French_Tart', usertype: 'business' },
        { id: 105, name: 'Robert_Harris', usertype: 'business' },
        { id: 106, name: 'Cinnamon_Cafe', usertype: 'business' },
        { id: 107, name: 'Kent_One', usertype: 'business' },
        { id: 108, name: 'Kent_Two', usertype: 'business' },
        { id: 109, name: 'Knet_Three', usertype: 'business' },
        { id: 110, name: 'Riverside_Cafe', usertype: 'business' },
        { id: 111, name: 'Milk_&_Honey_Cafe', usertype: 'business' },
        { id: 112, name: 'Subway', usertype: 'business' },
        { id: 113, name: 'Sam_One', usertype: 'business' },
        { id: 114, name: 'Sam_Two', usertype: 'business' },
        { id: 115, name: 'Sam_Three', usertype: 'business' }
      ])
    })
}
