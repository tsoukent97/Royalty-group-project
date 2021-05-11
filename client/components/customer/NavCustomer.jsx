import React, { useEffect, useState } from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getCustomerById } from '../../api/apiClient'

const id = 902

export default function NavCustomer () {
  const [state, setState] = useState([{
    username: ''
  }])

  useEffect(() => {
    getCustomerById(id)
      .then(user => {
        setState(user)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <Menu className='customer-nav' stackable widths={5}>
        <Menu.Item>
          <img src='images/royalty.jpg' alt='logo' />
        </Menu.Item>
        <Menu.Item>Welcome, {state.username}</Menu.Item>
        <Menu.Item>Your Royalty Cards</Menu.Item>
        <Menu.Item position='right'>
          <Link to={'/Customerhome/addCard'}><Button primary>Add a card</Button></Link>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button secondary>Logout</Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
