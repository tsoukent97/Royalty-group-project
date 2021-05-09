import React, { useState, useEffect } from 'react'
import Graph from './Graph'
import NavBusiness from './NavBusiness'
import { getCustomers } from '../../apiClient'

export default function BusinessHome () {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers(102)
      .then(currentCustomers =>
        setCustomers(currentCustomers))
      .catch(e => console.error(e.message))
  }, [])

  return (
    <div>
      <NavBusiness />
      <Graph />
      <div>
          Total Customer: {customers.length}
        <table>
          <tr>
            <td>Customer ID</td>
            <td>Stamp Count</td>
          </tr>
          {customers.map((customer, i) => <tr key={i}>{customer.customer_id}<td>{customer.stamp_count}</td></tr>)}
        </table>
      </div>
    </div>
  )
}
