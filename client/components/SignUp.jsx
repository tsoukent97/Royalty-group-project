import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

// TODO
// Stitch this form into api client, connect to DB
// Style this in semantic ui

function SignUp (props) {
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

  function homePath (e) {
    e.preventDefault()
    props.history.push('/')
  }

  return (
    <>
      <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <h1>Sign up: Customer</h1>
          <Form className='signup' size='large'>
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
        </Grid.Column>
      </Grid>
      <div>
        <button onClick={homePath}>Home</button>
      </div>
    </>
  )
}

export default SignUp
