import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'
import { businessId } from './CustomerHome'
import { updateStampCount, getStampCount, resetStampCount, getCustomerByUsername, deleteCard } from '../../api/apiClient'
import { userInfo } from '../Login'
import { Link } from 'react-router-dom'

export default function QrCode (props) {
  const [customerId, setCustomerId] = useState(0)
  const [stamps, setStamps] = useState({})

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
      alert('Congratulations! You get a freebie!')
    } else {
      updateStampCount(businessId, customerId)
      alert('You are one stamp closer to your freebie!')
    } return null
  }

  function handleDelete () {
    deleteCard(businessId, customerId)
    // props.history.push('/Customerhome')
  }

  return (
    <div>
      <QRCode
        id="123456"
        value="123456"
        size={290}
        level={'H'}
        includeMargin={true}
      />
      <button onClick={() => handleClick()}>Click to add stamp</button>
      <h3>Current stamps: {stamps.stamp_count} /10 </h3>
      <Link to={'/Customerhome'}><button onClick={handleDelete}>Delete Card</button></Link>
    </div>
  )
}
