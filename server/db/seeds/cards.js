exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { business_id: 105, customer_id: 901, stamp_count: 7 },
        { business_id: 108, customer_id: 901, stamp_count: 4 },
        { business_id: 111, customer_id: 901, stamp_count: 10 },
        { business_id: 102, customer_id: 901, stamp_count: 9 },
        { business_id: 115, customer_id: 901, stamp_count: 5 },
        { business_id: 105, customer_id: 902, stamp_count: 7 },
        { business_id: 108, customer_id: 902, stamp_count: 4 },
        { business_id: 111, customer_id: 902, stamp_count: 10 },
        { business_id: 102, customer_id: 902, stamp_count: 9 },
        { business_id: 115, customer_id: 902, stamp_count: 5 },
        { business_id: 105, customer_id: 903, stamp_count: 7 },
        { business_id: 108, customer_id: 903, stamp_count: 4 },
        { business_id: 111, customer_id: 903, stamp_count: 10 },
        { business_id: 102, customer_id: 903, stamp_count: 9 },
        { business_id: 115, customer_id: 903, stamp_count: 5 },
        { business_id: 105, customer_id: 904, stamp_count: 7 },
        { business_id: 108, customer_id: 904, stamp_count: 4 },
        { business_id: 111, customer_id: 904, stamp_count: 10 },
        { business_id: 102, customer_id: 904, stamp_count: 9 },
        { business_id: 115, customer_id: 904, stamp_count: 5 },
        { business_id: 105, customer_id: 905, stamp_count: 7 },
        { business_id: 108, customer_id: 905, stamp_count: 4 },
        { business_id: 111, customer_id: 905, stamp_count: 10 },
        { business_id: 102, customer_id: 905, stamp_count: 9 },
        { business_id: 115, customer_id: 905, stamp_count: 5 }
      ])
    })
}
