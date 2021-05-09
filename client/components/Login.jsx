import React, { useState } from 'react'

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
    props.history.push(props.isCustomer ? '/Customerhome': '/Businesshome')
    return null
  }
  function toggleBusiness (e) {
    e.preventDefault()
    props.history.push(props.isCustomer ? '/BusinessLogin': '/CustomerLogin')
  }

  function homePath (e) {
    e.preventDefault()
    props.history.push('/')
  }

  return (
    <>
      <label></label>
      <button onClick={toggleBusiness}>{props.isCustomer? 'Business Login': 'Customer Login'}</button>
      <div>
        <form>
          <h2>{props.isCustomer ? 'Customer': 'Business'} login page</h2>
          <label>{props.isCustomer ? 'Username:': 'Business:'}</label>
          <input 
            placeholder={props.isCustomer ? 'Enter username...': 'Enter business...'}
            name='username' 
            onChange={handleChange} 
            value={form.username}
            type='text'
            required
          />
          <br></br>

          <label>Password:</label>
          <input 
            placeholder='Enter password...'
            name='password' 
            type='text'
            onChange={handleChange} 
            value={form.password}
            required>
          </input>
          <br></br>
          <button type='button' onClick={handleSubmit}>Login</button>
          <div>
            <button onClick={homePath}>Home</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
