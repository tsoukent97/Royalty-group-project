// grid of images, 3 columns
// uncomment navCustomer once ready
// replace placeholder with company logos
import React, { useState, useEffect } from 'react'
// import NavCustomer from './NavCustomer'
import { Container, Grid, Image } from 'semantic-ui-react'
import NavCustomer from './NavCustomer'

function CustomerHome () {
  const [state, setState] = useState([{
    business: 'Air New Zealand',
    id: '109',
    logo: './images/air-nz.jpg'
  },
  {
    business: 'Starbucks',
    id: '101',
    logo: './images/starbucks.jpg'
  }])

  useEffect(() => {

  }, [])
  return (
    <div>
      <NavCustomer />
      <Grid relaxed columns={3}>
        {state.map((card) => <Grid.Column key={card.id}><Image href='#' src={card.logo} alt={card.business} /></Grid.Column>)}
      </Grid>
    </div>
  )
}

export default CustomerHome
