import React, { useEffect, useState } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { getAllCards, addCard, getCustomerByUsername } from '../../api/apiClient'
import { userInfo } from '../Login'

export default function AddCard (props) {
  const [customer, setCustomerId] = useState(0)
  const [cards, setCards] = useState([])

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
