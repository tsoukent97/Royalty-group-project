import React, { useEffect, useState } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { getAllCards, addCard } from '../../api/apiClient'

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
      <Grid relaxed columns={3}>
        {cards.map((card, i) =>
          <div key={i}>
            <Grid.Row>
              <img key={i} src={card.logo}></img>
              <Button positive key={i} onClick={() => handleClick(card.id)}>Add Card</Button>
            </Grid.Row>
          </div>)}
      </Grid>
    </>
  )
}
