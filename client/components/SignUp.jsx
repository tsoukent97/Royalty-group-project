import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { registerUser, registerBusiness } from '../api/passportAPI'
import Error from './Error'

// TODO
// Stitch this form into api client, connect to DB
// Style this in semantic ui

const initialState = {
  username: '',
  password: '',
  userType: 'Customer'
}

const initialBusinessState = {
  business: '',
  password: '',
  address: '',
  phoneNumber: '',
  userType: 'Business'
}

function SignUp (props) {
  const [customerForm, setCustomerForm] = useState(initialState)
  const [businessForm, setBusinessForm] = useState(initialBusinessState)
  const [error, setError] = useState('')

  function handleChange (e) {
    const { name, value } = e.target
    setCustomerForm({
      ...customerForm,
      [name]: value
    })
  }

  function handleBusinessChange (e) {
    const { name, value } = e.target
    setBusinessForm({
      ...businessForm,
      [name]: value
    })
  }

  function handleBusinessSubmit (e) {
    e.preventDefault()
    console.log('handlebusinesssubmit', businessForm)
    // registerBusiness(businessForm)
    //   .then((auth) => {
    //     if (auth === 'Business created') {
    //       props.history.push('/Businesshome')
    //     } else {
    //       setError(auth)
    //     }
    //     return null
    //   })
    //   .catch(e => {
    //     console.log(e.message)
    //   })
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
              name={props.isCustomer ? 'username' : 'business'}
              required
              value={props.isCustomer ? customerForm.username : businessForm.business}
              onChange={props.isCustomer ? handleChange : handleBusinessChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type='password'
              placeholder='Choose password'
              name='password'
              required
              value={props.isCustomer ? customerForm.password : businessForm.password}
              onChange={props.isCustomer ? handleChange : handleBusinessChange}
            />
          </Form.Field>
          <Form.Field>
            <label>{props.isCustomer ? '' : 'Phone Number:'}</label>
            {props.isCustomer
              ? ''
              : <input
                type='text'
                placeholder='Enter number'
                name='phoneNumber'
                required
                value={businessForm.phoneNumber}
                onChange={props.isCustomer ? handleChange : handleBusinessChange}
              />}
          </Form.Field>
          <Form.Field>
            <label>{props.isCustomer ? '' : 'Address:'}</label>
            {props.isCustomer
              ? ''
              : <input
                type='text'
                placeholder='Enter Address'
                name='address'
                required
                value={businessForm.address}
                onChange={props.isCustomer ? handleChange : handleBusinessChange}
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
                value={businessForm.email}
                onChange={props.isCustomer ? handleChange : handleBusinessChange}
              />}
          </Form.Field>
          <Error errorMessage={error}/>
          <Button primary onClick={homePath}>Home</Button>
          {props.isCustomer
            ? <Button positive type='submit' onClick={handleSubmit}>Submit</Button>
            : <Button positive type='submit' onClick={handleBusinessSubmit}>Submit</Button>}
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default SignUp
