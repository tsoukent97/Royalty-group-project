import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { registerUser } from '../api/passportAPI'
import Error from './Error'

// TODO
// Stitch this form into api client, connect to DB
// Style this in semantic ui

const initialState = {
  username: '',
  password: '',
  userType: 'Customer'
}

function SignUp (props) {
  const [customerForm, setCustomerForm] = useState(initialState)
  const [error, setError] = useState('')

  function handleChange (e) {
    const { name, value } = e.target
    setCustomerForm({
      ...customerForm,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    registerUser(customerForm)
      .then((auth) => {
        if (auth === 'User created') {
          props.history.push('/Customerlogin')
        } else {
          setError(auth)
        }
        return null
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  function homePath (e) {
    e.preventDefault()
    props.history.push('/')
  }

  function toggleBusiness (e) {
    e.preventDefault()
    props.history.push(props.isCustomer ? '/BusinessSignup' : '/CustomerSignup')
  }

  return (
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Button onClick={toggleBusiness}>{props.isCustomer ? 'Business Sign up' : 'Customer Sign up'}</Button>
        <h1>{props.isCustomer ? 'Customer' : 'Business'} Sign up</h1>
        <Form>
          <Form.Field>
            <label>{props.isCustomer ? 'Username:' : 'Business:'}</label>
            <input type='text'
              placeholder={props.isCustomer ? 'Choose username' : 'Choose business name'}
              name='username'
              required
              value={customerForm.username}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type='password'
              placeholder='Choose password'
              name='password'
              required
              value={customerForm.password}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>{props.isCustomer ? '' : 'Phone Number:'}</label>
            {props.isCustomer
              ? ''
              : <input
                type='text'
                placeholder='Enter number'
                name='number'
                required
                value={customerForm.phoneNumber}
                onChange={handleChange}
              />}
          </Form.Field>
          <Form.Field>
            <label>{props.isCustomer ? '' : 'Address:'}</label>
            {props.isCustomer
              ? ''
              : <input
                type='text'
                placeholder='Enter Address'
                name='Address'
                required
                value={customerForm.address}
                onChange={handleChange}
              />}
          </Form.Field>
          <Form.Field>
            <label>{props.isCustomer ? '' : 'Email:'}</label>
            {props.isCustomer
              ? ''
              : <input
                type='text'
                placeholder='Enter email'
                name='email'
                required
                value={customerForm.email}
                onChange={handleChange}
              />}
          </Form.Field>
          <Error errorMessage={error}/>
          <br></br>
          <Button primary onClick={homePath}>Home</Button>
          <Button positive type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default SignUp
