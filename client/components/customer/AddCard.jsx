import React, { useEffect, useState } from 'react'
import { Container, Grid, Header, Icon } from 'semantic-ui-react'
import { getAllCards, addCard, getCustomerByUsername } from '../../api/apiClient'
import { userInfo } from '../Login'
import NavCustomer from './NavCustomer'
import Error from '../Error'

export default function AddCard () {
  const [customer, setCustomerId] = useState(0)
  const [cards, setCards] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getCustomerByUsername(userInfo)
      .then((id) => {
        setCustomerId(id)
        return null
      }).catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    getAllCards()
      .then(allCards =>
        setCards(allCards))
      .catch(e => console.error(e.message))
  }, [])

  function handleClick (businessId) {
    addCard(businessId, customer.id)
      .then(result => {
        setError(result)
        return null
      }).catch(e => console.error(e.message))
  }

  return (
    <>
      <NavCustomer />
      <br></br>
      <Error errorMessage={error} />
      <Container className='card-content' textAlign='center'>
        <Header as='h1'><Icon name='add square'/>Add a new card</Header>
        <Header as='h3'>Click a card below to add it to your wallet!</Header>
      </Container>
      <Container className='add-card-grid'>
        <Grid relaxed columns={3}>
          {cards.map((card) => <Grid.Column key={card.id}>
            <div className='overlay ui fluid card'>
              <img className='image' src={card.logo} onClick={() => handleClick(card.id)}></img>
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
