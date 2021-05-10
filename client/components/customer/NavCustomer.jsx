import React from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function NavCustomer () {
  return (
    <Container>
      <Menu stackable widths={5}>
        <Menu.Item>
          <img src='/logo.png' alt='logo' />
        </Menu.Item>
        <Menu.Item>Welcome, {} here</Menu.Item>
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
