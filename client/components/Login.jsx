import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { loginCustomer } from '../api/passportAPI'

// let userInfo = {}

function Login (props) {
  const initialState = {
    username: '',
    password: ''
  }

  const [form, setForm] = useState(initialState)

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  // function handleSubmit (e) {
  //   e.preventDefault()
  //   userInfo = form
  //   props.history.push(props.isCustomer ? '/Customerhome' : '/Businesshome')
  //   return null
  // }

  function handleSubmit (e) {
    e.preventDefault()
    loginCustomer(form)
      .then((auth) => {
        console.log(auth)
        if (auth === 'Login Succeeded') {
          console.log('logged in')
          props.history.push('/Customerhome')
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
    <>
      < Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form className='signup' size='large'>
            <Button onClick={homePath}>Home</Button>
            <Button onClick={toggleBusiness}>{props.isCustomer ? 'Business Login' : 'Customer Login'}</Button>
            <h2>{props.isCustomer ? 'Customer' : 'Business'} login page</h2>
            <Form.Field>
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
            <Button positive type='button' onClick={handleSubmit}>Login</Button>
          </Form>
        </Grid.Column >
      </Grid >
    </>
  )
}

export default Login
