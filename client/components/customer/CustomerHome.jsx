// grid of images, 3 columns
// uncomment navCustomer once ready
// replace placeholder with company logos
import React, { useState, useEffect } from 'react'
// import NavCustomer from './NavCustomer'
import { Grid, Image } from 'semantic-ui-react'
import { getCustomerCards } from '../../api/apiClient'
import NavCustomer from './NavCustomer'
import { Link } from 'react-router-dom'

const id = 902
let businessId = 0

function CustomerHome () {
  const [state, setState] = useState([{
    business: '',
    id: '',
    logo: ''
  }
  ])

  useEffect(() => {
    getCustomerCards(id)
      .then(cards => {
        setState(cards)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function handleClick (id) {
    businessId = id
    // props.history.push('/Customerhome/cardInfo')
    return null
  }

  return (
    <div>
      <NavCustomer />
      <Grid relaxed columns={3}>
        {state.map((card) => <Grid.Column key={card.id}><Link to={'/Customerhome/cardInfo'}><Image href='#' src={card.logo} alt={card.business} onClick={() => handleClick(card.id)}/></Link></Grid.Column>)}
      </Grid>
    </div>
  )
}

export { CustomerHome, businessId }
