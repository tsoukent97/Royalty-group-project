import React from 'react'
import QRCode from 'qrcode.react'
import { updateStampCount } from '../../apiClient'

export default function QrCode () {
  function handleClick () {
    updateStampCount()
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
      <a onClick={() => handleClick()}> Scan QR </a>
    </div>
  )
}