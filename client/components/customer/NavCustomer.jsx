import React from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'

export default function NavCustomer () {
  return (
    <Container>
      <Menu stackable widths={5}>
        <Menu.Item>
          <img src='/logo.png' alt='Our logo here' />
        </Menu.Item>
        <Menu.Item>Welcome, username here</Menu.Item>
        <Menu.Item>Your Royalty Cards</Menu.Item>
        <Menu.Item position='right'>
          <Button primary>Add a card</Button>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button secondary>Logout</Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
