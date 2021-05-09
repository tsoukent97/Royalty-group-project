import React from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'

export default function NavBusiness () {
  return (
<<<<<<< HEAD
    <Container>
      <Menu stackable widths={5}>
        <Menu.Item>
          <img src='/logo.png' alt='logo' />
        </Menu.Item>
        <Menu.Item>Welcome, username here</Menu.Item>
        <Menu.Item>Usage Statistics</Menu.Item>
        <Menu.Item position='right'>
          <Button secondary>Logout</Button>
        </Menu.Item>
      </Menu>
    </Container>
=======
    <nav>
      <li>Home</li>
      <li>Log Out</li>
      <li><a href='/#/Businesshome/AccountInfo'>Account Information</a></li>
    </nav>
>>>>>>> main
  )
}
