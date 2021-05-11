import React, { useState, useEffect } from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
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
    return null
  }

  return (
    <>
      <NavCustomer />
      <Container className='card-grid'>
        <Grid relaxed columns={2}>
          {state.map((card) => <Grid.Column key={card.id}>
            <Link to={'/Customerhome/cardInfo'}>
              <div className='overlay ui fluid card'>
                <img className='image' src={card.logo} alt={card.business} onClick={() => handleClick(card.id)}/>
                <div className='content'>
                  <p className='header'>{card.business}</p>
                </div>
              </div>
            </Link>
          </Grid.Column>)}
        </Grid>
      </Container>
    </>
  )
}

export { CustomerHome, businessId }
