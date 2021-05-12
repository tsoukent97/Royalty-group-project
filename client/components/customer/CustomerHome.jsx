import React, { useState, useEffect } from 'react'
import { Container, Grid, Message, Icon } from 'semantic-ui-react'
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
      <br></br>
      {state.length === 0 ? <Message negative>
        <Message.Header><Icon name='exclamation triangle'/>You have no cards at the moment. Please add cards.</Message.Header>
      </Message> :
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
