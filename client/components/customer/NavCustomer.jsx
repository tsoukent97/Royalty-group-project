import React from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logOut } from '../../api/passportAPI'
import { getCustomers } from '../../api/apiClient'

export default function NavCustomer () {
// please dont make me rewrite this function
  function handleClick () {
    logOut()
      .then(auth => {
        console.log(auth.text)
        if (auth.text === '"Logged out successfully"') {
          // props.history.push('/')
        } return null
      }).catch(e => {
        console.log(e.message)
      })
    // window.location.reload()
  }

  function showUser () {

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
          <Link to={'/'}><Button secondary onClick={handleClick}>Logout</Button></Link>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
