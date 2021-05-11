import React, { useEffect, useState } from 'react'
import { getAllCards, addCard } from '../../api/apiClient'
import Error from '../Error'

export default function AddCard () {
  const [cards, setCards] = useState([])
  const [error, setError] = useState('')

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
          setError(error)
        } else {
          alert('Card added successfully!')
        }
        return null
      }).catch(e => console.error(e.message))
  }
  console.log(cards)
  return (
    <>
      <Error errorMesage={error}/>
      {cards.map((card, i) => <div key={i}><li key={i}>{card.business}</li><img key={i} src={card.logo}></img><button key={i} onClick={() => handleClick(card.id)}>+ADD CARD</button></div>)}
    </>
  )
}
