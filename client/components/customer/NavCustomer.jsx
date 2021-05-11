import React, { useEffect, useState } from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { userInfo } from '../Login'



export default function NavCustomer () {
  return (
    <Container>
      <Menu className='customer-nav' stackable widths={5}>
        <Menu.Item>
          <img className='logo-small' src='images/royalty.jpg' alt='logo' />
        </Menu.Item>
        <Menu.Item>Welcome, {userInfo}</Menu.Item>
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
