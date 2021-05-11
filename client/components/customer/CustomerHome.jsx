import React, { useState, useEffect } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { getCustomerCards, getCustomerByUsername } from '../../api/apiClient'
import NavCustomer from './NavCustomer'
import { userInfo } from '../Login'

let businessId = 0

function CustomerHome (props) {
  const [state, setState] = useState([{
    business: '',
    id: '',
    logo: ''
  }
  ])

  useEffect(() => {
    getCustomerByUsername(userInfo)
      .then((customer) => {
        getCustomerCards(customer.id)
          .then(cards =>
            setState(cards))
          .catch(e => console.error(e.message))
        return null
      }).catch(err => {
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
      {state.length === 0 ? <div>You have no cards at the moment. Please add cards.</div> :
        <Container className='card-grid'>
          <Grid relaxed columns={2}>
            {state.map((card) => <Grid.Column key={card.id}>
              <div className='overlay ui fluid card' onClick={() => handleClick(card.id)}>
                <img className='image' src={card.logo} alt={card.business} />
                <div className='content'>
                  <p className='header'>{card.business}</p>
                </div>
              </div>
            </Grid.Column>)}
          </Grid>
        </Container>}
    </>
  )
}

export { CustomerHome, businessId }
