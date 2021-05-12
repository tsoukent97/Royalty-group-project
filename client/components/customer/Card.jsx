import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'
import { getBusinessProfile, updateStampCount, getStampCount, resetStampCount, getCustomerByUsername, deleteCard } from '../../api/apiClient'
import { businessId } from './CustomerHome'
import { userInfo } from '../Login'
import { Container, Button, Image } from 'semantic-ui-react'
import NavCustomer from './NavCustomer'
import Error from '../Error'

export default function Card (props) {
  const [customerId, setCustomerId] = useState(0)
  const [stamps, setStamps] = useState({})
  const [business, setBusiness] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getBusinessProfile(businessId)
      .then(currentBusiness => {
        setBusiness(currentBusiness)
        return null
      }).catch(e => console.error(e.message))
  }, [error])

  useEffect(() => {
    getCustomerByUsername(userInfo)
      .then((customer) => {
        setCustomerId(customer.id)
        return getStampCount(businessId, customer.id)
      })
      .then(currentCount =>
        setStamps(currentCount[0])
      )
      .catch(err => {
        console.log(err)
      })
  }, [stamps])

  function handleClick () {
    if (stamps.stamp_count === 9) {
      resetStampCount(businessId, customerId)
      setError('Congratulations! You get a freebie!')
    } else {
      updateStampCount(businessId, customerId)
      setError('You are one stamp closer to your freebie!')
    } return null
  }

  function handleDelete () {
    deleteCard(businessId, customerId)
    props.history.push('/Customerhome')
  }

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
        <QRCode
          id="123456"
          value="123456"
          size={290}
          level={'H'}
          includeMargin={true}
        />
        <h3>Current stamps: {stamps.stamp_count} /10 </h3>
        <Button positive onClick={() => handleClick()}>Add stamp</Button>
        <Button negative onClick={handleDelete}>Remove Card</Button>
      </Container>
    </>
  )
}