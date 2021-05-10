// grid of images, 3 columns
// uncomment navCustomer once ready
// replace placeholder with company logos
import React, { useState, useEffect } from 'react'
// import NavCustomer from './NavCustomer'
import { Container, Grid, Image } from 'semantic-ui-react'
import { getCustomerCards } from '../../apiClient'
import NavCustomer from './NavCustomer'

function CustomerHome () {
  const [state, setState] = useState([{
    business: '',
    id: '',
    logo: ''
  }
  ])

  useEffect(() => {
    getCustomerCards(902)
      .then(cards => {
        setState(cards)
        return null
      })
      .catch(err => {
        console.log(err)
      })
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
