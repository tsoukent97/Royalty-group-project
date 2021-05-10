import React, { useEffect, useState } from 'react'
import QrCode from './QrCode'
import { getBusinessProfile, getStampCount } from '../../apiClient'

export default function Card () {
  const [business, setBusiness] = useState([])
  const [stamps, setStamps] = useState()

  useEffect(() => {
    getBusinessProfile(101)
      .then(currentBusiness =>
        setBusiness(currentBusiness))
      .catch(e => console.error(e.message))
  })

  useEffect(() => {
    getStampCount(101)
      .then(currentBusiness =>
        setBusiness(currentBusiness))
      .catch(e => console.error(e.message))
  })
  return (
    <>
      <h1>{business.business}</h1>
      <img src={business.logo} />
      <QrCode />
      <h3>Curren stamps: </h3>
    </>
  )
}
