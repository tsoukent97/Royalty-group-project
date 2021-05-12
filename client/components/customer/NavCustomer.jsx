import React from 'react'
import { Container, Button, Menu, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logOut } from '../../api/apiClient'
import { userInfo } from '../Login'

export default function NavCustomer () {
  function handleClick () {
    logOut()
      .then(auth => {
        if (auth === 'Logged out successfully') {
          console.log('logged out')
        } return null
      }).catch(e => {
        console.log(e.message)
      })
  }

  return (
    <Container>
      <Menu className='customer-nav' stackable widths={5}>
        <Menu.Item>
          <Image size='tiny' src='images/royalty.jpg' alt='logo' />
        </Menu.Item>
        <Menu.Item position='left' header>Welcome, {userInfo}!</Menu.Item>
        <Menu.Item header>Your Royalty Cards</Menu.Item>
        <Menu.Item position='right'>
          <Button.Group>
            <Link to={'/Customerhome/addCard'}><Button positive onClick={handleClick}>Add card</Button></Link>
            <Button.Or />
            <Link to={'/Customerhome'}>=<Button primary onClick={handleClick}>View Wallet</Button></Link>
          </Button.Group>
        </Menu.Item>
        <Menu.Item position='right'>
          <Link to={'/'}><Button secondary onClick={handleClick}><Icon inverted name='log out'/>Logout</Button></Link>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
