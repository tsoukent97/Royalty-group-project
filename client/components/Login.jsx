import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { loginCustomer, loginBusiness } from '../api/passportAPI'
import Error from './Error'

let userInfo = ''
let businessInfo = ''

export default function Login (props) {
  const initialState = {
    username: '',
    password: ''
  }

  const initialBusinessState = {
    business: '',
    password: ''
  }

  const [customerForm, setCustomerForm] = useState(initialState)
  const [businessForm, setBusinessForm] = useState(initialBusinessState)
  const [error, setError] = useState('')

  function handleBusinessChange (e) {
    const { name, value } = e.target
    setBusinessForm({
      ...businessForm,
      [name]: value
    })
  }

  function handleBusinessSubmit (e) {
    e.preventDefault()
    loginBusiness(businessForm)
      .then((auth) => {
        console.log(auth)
        if (auth === 'Login Succeeded') {
          props.history.push('/Businesshome')
        } else {
          setError(auth)
        } return null
      })
      .catch(e => {
        console.log(e.message)
      })
    businessInfo = businessForm.business
    console.log(businessInfo)
  }

  function handleChange (e) {
    const { name, value } = e.target
    setCustomerForm({
      ...customerForm,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    loginCustomer(customerForm)
      .then((auth) => {
        console.log(auth)
        if (auth === 'Login Succeeded') {
          props.history.push('/Customerhome')
        } else {
          setError(auth)
        } return null
      })
      .catch(e => {
        console.log(e.message)
      })
    userInfo = customerForm.username
    console.log(userInfo)
  }

  function toggleBusiness (e) {
    e.preventDefault()
    props.history.push(props.isCustomer ? '/BusinessLogin' : '/CustomerLogin')
  }

  function homePath (e) {
    e.preventDefault()
    props.history.push('/')
  }

  return (
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Button onClick={toggleBusiness}>{props.isCustomer ? 'Business Login' : 'Customer Login'}</Button>
        <Form className='signup' size='large'>
          <Form.Field>
            <h2>{props.isCustomer ? 'Customer' : 'Business'} login page</h2>
            <label>{props.isCustomer ? 'Username:' : 'Business:'}</label>
            <input
              placeholder={props.isCustomer ? 'Enter username...' : 'Enter business...'}
              name={props.isCustomer ? 'username' : 'business'}
              onChange={props.isCustomer ? handleChange : handleBusinessChange}
              value={props.isCustomer ? customerForm.username : businessForm.business}
              type='text'
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input
              placeholder='Enter password...'
              name='password'
              type='password'
              onChange={props.isCustomer ? handleChange : handleBusinessChange}
              value={props.isCustomer ? customerForm.password : businessForm.passowrd}
              required
            />
          </Form.Field>
          <Error errorMessage={error} />
          <br></br>
          <Button primary onClick={homePath}>Home</Button>
          {props.isCustomer
            ? <Button positive type='button' onClick={handleSubmit}>Login</Button>
            : <Button positive type='button' onClick={handleBusinessSubmit}>Login</Button>}
        </Form>
      </Grid.Column >
    </Grid >
  )
}

export { Login, userInfo, businessInfo }
