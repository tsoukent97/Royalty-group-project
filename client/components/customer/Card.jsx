import React, { useEffect, useState } from 'react'
import QrCode from './QrCode'
import { getBusinessProfile } from '../../api/apiClient'
import { businessId } from './CustomerHome'
import { Container, Image } from 'semantic-ui-react'
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
      <div className='ui single fluid card'>
        <Image size='medium' src={business.logo} alt={business.business} />
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
