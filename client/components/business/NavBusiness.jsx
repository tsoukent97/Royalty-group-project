import React from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'

export default function NavBusiness () {
  return (
    <Container>
      <Menu stackable widths={5}>
        <Menu.Item>
          <img src='/logo.png' alt='logo' />
        </Menu.Item>
        <Menu.Item>Welcome, username here</Menu.Item>
        <Menu.Item><a href='/#/Businesshome/AccountInfo'>Usage Statistics</a></Menu.Item>
        <Menu.Item position='right'>
          <Button secondary>Logout</Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
