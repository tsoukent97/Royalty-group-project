import React from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logOut } from '../../api/passportAPI'

export default function NavCustomer () {
  function handleClick () {
    logOut().then(() => {

    })
    // window.location.reload()
  }

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
          <Button secondary onClick={handleClick}>Logout</Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
