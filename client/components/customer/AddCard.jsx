import React, { useEffect, useState } from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'
import { getAllCards, addCard } from '../../api/apiClient'
import NavCustomer from './NavCustomer'

export default function AddCard (props) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCards()
      .then(allCards =>
        setCards(allCards))
      .catch(e => console.error(e.message))
  }, [])

  function handleClick (businessId) {
    const customerId = 901
    addCard(businessId, customerId)
      .then(result => {
        if (result === 'Card added successfully!') {
          alert(result)
          props.history.push('/Customerhome')
        } else {
          alert(result)
        } return null
      }).catch(e => console.error(e.message))
  }

  return (
    <>
      <NavCustomer />
      <h1 className="addcard-header">Select a new card</h1>
      <h3 className="addcard-info">Click an image below to add it</h3>
      <Container className='add-card-grid'>
        <Grid relaxed columns={2}>
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
