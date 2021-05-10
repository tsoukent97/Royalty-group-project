import React, { useEffect, useState } from 'react'
import QrCode from './QrCode'
import { getBusinessProfile, getStampCount } from '../../api/apiClient'
import { businessId } from './CustomerHome'

export default function Card () {
  const [business, setBusiness] = useState([])

  useEffect(() => {
    getBusinessProfile(businessId)
      .then(currentBusiness =>
        setBusiness(currentBusiness))
      .catch(e => console.error(e.message))
  }, [])

  return (
    <>
      <h1>{business.business}</h1>
      <img src={business.logo} />
      <QrCode />
    </>
  )
}
