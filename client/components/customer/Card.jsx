import React, { useEffect, useState } from 'react'
import QrCode from './QrCode'
import { getBusinessProfile } from '../../api/apiClient'
import { businessId } from './CustomerHome'
import { Container } from 'semantic-ui-react'

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
      <h1 className="card-title">{business.business}</h1>
      <img className="card-logo" src={business.logo} />
      <Container className="card-wrapper">
        <QrCode />
      </Container>
    </>
  )
}
