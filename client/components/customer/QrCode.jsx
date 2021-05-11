import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'
import { businessId } from './CustomerHome'
import { updateStampCount, getStampCount, resetStampCount, getCustomerByUsername } from '../../api/apiClient'
import { userInfo } from '../Login'

export default function QrCode () {
  const [customerId, setCustomerId] = useState(0)
  const [stamps, setStamps] = useState({})

  useEffect(() => {
    getCustomerByUsername(userInfo)
      .then((customer) => {
        setCustomerId(customer.id)
        getStampCount(businessId, customer.id)
          .then(currentCount =>
            setStamps(currentCount[0]))
          .catch(e => console.error(e.message))
        return null
      }).catch(err => {
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
    </div>
  )
}
