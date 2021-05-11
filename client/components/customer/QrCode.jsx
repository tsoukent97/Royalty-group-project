import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'
import { businessId } from './CustomerHome'
import { updateStampCount, getStampCount, resetStampCount } from '../../api/apiClient'

export default function QrCode () {
  const [stamps, setStamps] = useState({})

  useEffect(() => {
    const customerId = 901
    getStampCount(businessId, customerId)
      .then(currentCount =>
        setStamps(currentCount[0]))
      .catch(e => console.error(e.message))
  }, [stamps])

  function handleClick () {
    const customerId = 901
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
