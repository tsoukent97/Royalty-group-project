import React, { useState, useEffect } from 'react'

// TODO
// Stitch this form into api client, connect to DB
// Style this in semantic ui

function SignUp () {
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
      <h1>Sign up: Customer</h1>
      <div>
        <form>
          <label>Username</label>
          <input type='text'
            placeholder='Username'
            name='username'
            required
            value={customerForm.username}
            onChange={handleChange}
          />
          <br></br>
          <label>Password</label>
          <input type='text'
            placeholder='Password'
            name='password'
            required
            value={customerForm.password}
            onChange={handleChange}
          />
          <br></br>
          <button onSubmit={handleSubmit}>Sign up</button>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <button onClick={homePath}>Home</button>
      </div>
    </>
  )
}

export default SignUp
