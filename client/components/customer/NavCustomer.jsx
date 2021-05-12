import React from 'react'
import { Container, Button, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logOut } from '../../api/passportAPI'
import { userInfo } from '../Login'

export default function NavCustomer () {
  function handleClick () {
    logOut()
      .then(auth => {
        if (auth === 'Logged out successfully') {
          console.log('logged out')
          // props.history.push('/')
        } return null
      }).catch(e => {
        console.log(e.message)
      })
  }

  return (
    <Container>
      <Menu className='customer-nav' stackable widths={6}>
        <Menu.Item>
          <Image size='tiny' src='images/royalty.jpg' alt='logo' />
        </Menu.Item>
        <Menu.Item header>Welcome, {userInfo}!</Menu.Item>
        <Menu.Item header>Your Royalty Cards</Menu.Item>
        <Menu.Item position='right'>
          <Link to={'/Customerhome/addCard'}><Button positive>Add a card</Button></Link>
        </Menu.Item>
        <Menu.Item position='right'>
          <Link to={'/Customerhome'}><Button primary onClick={handleClick}>View Wallet</Button></Link>
        </Menu.Item>
        <Menu.Item position='right'>
          <Link to={'/'}><Button secondary onClick={handleClick}>Logout</Button></Link>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
