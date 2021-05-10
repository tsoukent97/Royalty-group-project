import React, { useEffect, useState } from 'react'
import { getAllCards } from '../../apiClient'

export default function AddCard () {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCards(901)
      .then(allCards =>
        setCards(allCards))
      .catch(e => console.error(e.message))
  }, [])

  console.log(cards)
  return (
    <>
      {cards.map((card, i) => <li key={i}>{card.business}</li>)}
    </>
  )
}