import React from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logOut } from '../../api/passportAPI'

export default function NavCustomer (props) {
  function handleClick (e) {
    e.preventDefault()
    logOut()
      .then(msg => {
        if (msg === 'Logged out successfully') {
          props.history.push('/')
        } return null
      }).catch(e => {
        console.log(e.message)
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
