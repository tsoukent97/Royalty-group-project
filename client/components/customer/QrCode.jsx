import React from 'react'
import QRCode from 'qrcode.react'

export default function QrCode () {
    
  return (
    <div>
      <QRCode
        id="123456"
        value="123456"
        size={290}
        level={'H'}
        includeMargin={true}
      />
      {/* <a onClick={downloadQR}> Download QR </a> */}
    </div>
  )
}