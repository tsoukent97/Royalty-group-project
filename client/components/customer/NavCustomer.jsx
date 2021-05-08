import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

export default function NavCustomer () {
  return (
    <Container>
      <Menu stackable>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>
        <Menu.Item>Features</Menu.Item>
        <Menu.Item>Testimonials</Menu.Item>
        <Menu.Item>Sign-in</Menu.Item>
      </Menu>
    </Container>
  )
}
