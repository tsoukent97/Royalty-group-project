import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

let userInfo = {}

function Login (props) {
  const initialData = {
    username: '',
    password: ''
  }

  const [form, setForm] = useState(initialData)

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    userInfo = form
    props.history.push(props.isCustomer ? '/Customerhome' : '/Businesshome')
    return null
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
              name='username'
              onChange={handleChange}
              value={form.username}
              type='text'
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input
              placeholder='Enter password...'
              name='password'
              type='text'
              onChange={handleChange}
              value={form.password}
              required
            />
          </Form.Field>
          <Button primary onClick={homePath}>Home</Button>
          <Button positive type='button' onClick={handleSubmit}>Login</Button>
        </Form>
      </Grid.Column >
    </Grid >
  )
}

export default Login
