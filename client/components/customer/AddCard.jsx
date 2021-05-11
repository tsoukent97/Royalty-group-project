import React, { useEffect, useState } from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'
import { getAllCards, addCard } from '../../api/apiClient'

export default function AddCard () {
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
      .then(id => {
        if (!id) {
          alert('Card not added Succesfully! Please try again.')
        } else {
          alert('Card added successfully!')
        }
        return null
      }).catch(e => console.error(e.message))
  }
  console.log(cards)
  return (
    <>
      <h1 className="addcard-header">New Cards</h1>
      <h3 className="addcard-info">Click an image to add it</h3>
      <Container className='card-grid'>
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
