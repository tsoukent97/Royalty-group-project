import React, { useEffect, useState } from 'react'
import QrCode from './QrCode'
import { getBusinessProfile, getStampCount } from '../../apiClient'

export default function Card () {
  const [business, setBusiness] = useState([])
  const [stamps, setStamps] = useState({})

  useEffect(() => {
    getBusinessProfile(105)
      .then(currentBusiness =>
        setBusiness(currentBusiness))
      .catch(e => console.error(e.message))
  }, [])

  useEffect(() => {
    const businessId = 105
    const customerId = 901
    getStampCount(businessId, customerId)
      .then(currentCount =>
        setStamps(currentCount[0]))
      .catch(e => console.error(e.message))
  }, [])
  return (
    <>
      <h1>{business.business}</h1>
      <img src={business.logo} />
      <QrCode />
      <h3>Current stamps: {stamps.stamp_count} </h3>
    </>
  )
}
