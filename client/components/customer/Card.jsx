import React, { useEffect, useState } from 'react'
import QrCode from './QrCode'
import { getBusinessProfile } from '../../api/apiClient'
import { businessId } from './CustomerHome'
import { Container } from 'semantic-ui-react'
import NavCustomer from './NavCustomer'

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
      <NavCustomer />
      <h1 className="card-title">{business.business}</h1>
      <div className='overlay ui fluid card'>
        <img className='image' src={business.logo} alt={business.business} />
        <div className='content'>
          <p className='header'>{business.business}</p>
        </div>
      </div>
      <Container className="card-wrapper">
        <QrCode />
      </Container>
    </>
  )
}
