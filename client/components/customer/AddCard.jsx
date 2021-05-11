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
      <Grid relaxed columns={3}>
        {cards.map((card, i) =>
          <div key={i}>
            <Grid.Row>
              <div className='ui fluid card'>
                <img key={i} src={card.logo} onClick={() => handleClick(card.id)}></img>
                {/* <Button positive key={i} onClick={() => handleClick(card.id)}>Add Card</Button> */}
                <div className='content'><p className='header'>{card.business}</p></div>
              </div>
            </Grid.Row>
          </div>)}
      </Grid>
    </>
  )
}
