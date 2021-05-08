import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

// TODO
// Stitch this form into api client, connect to DB
// Style this in semantic ui

function Signup (props) {
  const [customerForm, setCustomerForm] = useState({
    username: '',
    password: '',
    userType: 'Customer'
  })

  function handleChange (e) {
    const { name, value } = e.target
    setCustomerForm({
      ...customerForm,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log(setCustomerForm)
  }

  return (
    <>
      <h1>Sign up: Customer</h1>
      <Form className='signup' size='mini'>
        <Form.Field>
          <label>Username</label>
          <input type='text'
            placeholder='Username'
            name='username'
            required
            value={customerForm.username}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='text'
            placeholder='Password'
            name='password'
            required
            value={customerForm.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Button onSubmit={handleSubmit} type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export default Signup
