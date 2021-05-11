import React, { useEffect, useState } from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logOut } from '../../api/passportAPI'
import { getCustomers, getCustomerById } from '../../api/apiClient'
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

  // const [state, setState] = useState([{
  //   username: ''
  // }])

  // useEffect(() => {
  //   getCustomerById(userInfo)
  //     .then(user => {
  //       setState(user)
  //       return null
  //     })
  //     .catch(err => console.log(err))
  // }, [])

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
          <Link to={'/'}><Button secondary onClick={handleClick}>Logout</Button></Link>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
