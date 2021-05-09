import React, { useEffect, useState } from 'react'
import { getBusinessProfile } from '../../apiClient'

export default function AccountInfo () {
  const [businessInfo, setBusinessInfo] = useState([])

  useEffect(() => {
    getBusinessProfile(102)
      .then(business => setBusinessInfo(business))
      .catch(e => console.error(e.message))
  }, [])

  return (
    <div>
      {businessInfo.name}
      {businessInfo.address}
      {businessInfo.email}
      {businessInfo.phone_number}
    </div>
  )
}