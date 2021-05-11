import React, { useState, useEffect } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { getCustomerCards } from '../../api/apiClient'
import NavCustomer from './NavCustomer'

const id = 902
let businessId = 0

function CustomerHome (props) {
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
    props.history.push('/Customerhome/cardInfo')
    return null
  }

  return (
    <>
      <NavCustomer />
      <Container className='card-grid'>
        <Grid relaxed columns={2}>
          {state.map((card) => <Grid.Column key={card.id}>
            <div className='overlay ui fluid card'>
              <img className='image' src={card.logo} alt={card.business} onClick={() => handleClick(card.id)}/>
              <div className='content'>
                <p className='header'>{card.business}</p>
              </div>
            </div>
          </Grid.Column>)}
        </Grid>
      </Container>
    </>
  )
}

export { CustomerHome, businessId }
