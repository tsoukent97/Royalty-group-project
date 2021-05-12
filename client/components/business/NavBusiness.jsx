import React from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import { logOut } from '../../api/passportAPI'
import { Link } from 'react-router-dom'
import { businessInfo } from '../Login'

export default function NavBusiness () {
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
    <Container className="nav-business">
      <Menu stackable widths={5}>
        <Menu.Item>
          <img src='images/royalty.jpg' alt='logo' />
        </Menu.Item>
        <Menu.Item>Welcome, {businessInfo}</Menu.Item>
        <Menu.Item><a href='/#/Businesshome/AccountInfo'>Usage Statistics</a></Menu.Item>
        <Menu.Item position='right'>
          <Link to={'/'}><Button secondary onClick={handleClick}>Logout</Button></Link>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
