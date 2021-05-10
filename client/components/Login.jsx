import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { loginCustomer } from '../api/passportAPI'
import Error from './Error'

// let userInfo = {}

function Login (props) {
  const initialState = {
    username: '',
    password: ''
  }

  const [form, setForm] = useState(initialState)
  const [error, setError] = useState('')

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    loginCustomer(form)
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
              type='password'
              onChange={handleChange}
              value={form.password}
              required
            />
          </Form.Field>
          <Error errorMessage={error} />
          <Button primary onClick={homePath}>Home</Button>
          <Button positive type='button' onClick={handleSubmit}>Login</Button>
        </Form>
      </Grid.Column >
    </Grid >
  )
}

export default Login
