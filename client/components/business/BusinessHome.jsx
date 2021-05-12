import React, { useState, useEffect } from 'react'
import Graph from './Graph'
import NavBusiness from './NavBusiness'
import { getCustomers } from '../../api/apiClient'
import { Container, Header } from 'semantic-ui-react'

export default function BusinessHome () {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers(102)
      .then(currentCustomers =>
        setCustomers(currentCustomers))
      .catch(e => console.error(e.message))
  }, [])

  return (
    <>
      <NavBusiness />
      <Graph />
      <Container textAlign='center' className="wrapper">
        <div className='app'>
          <Header>Total Customers: {customers.length}</Header>
          <table className='ui selectable table'>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Stamp Count</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, i) =>
                <tr key={i}>{customer.customer_id}<td>{customer.stamp_count}</td></tr>)}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  )
}
