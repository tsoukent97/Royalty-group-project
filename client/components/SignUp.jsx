import React, { useState } from 'react'

// TODO
// Stitch this form into api client, connect to DB
// Style this in semantic ui

function SignUp (props) {
  const [customerForm, setCustomerForm] = useState({
    email:'',
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

  function toggleBusiness(e) {
    e.preventDefault()
    props.history.push(props.isCustomer ? '/BusinessSignup' : '/CustomerSignup')
  }

  return (
    <>
      <button onClick={toggleBusiness}>{props.isCustomer? 'Business Sign up': 'Customer Sign up'}</button>
      <h2>{props.isCustomer ? 'Customer': 'Business'} Sign up</h2>
      <div>
        <form>
          <label>Email:</label>
          <input type='text' 
          placeholder='Enter email' 
          name='email'
          required
          value={customerForm.email}
          onChange={handleChange}
          />
          <br></br>
          <label>{props.isCustomer ? 'Username:' : 'Business:'}</label>
          <input type='text'
            placeholder={props.isCustomer ? 'Choose username': 'Choose business name'}
            name='username'
            required
            value={customerForm.username}
            onChange={handleChange}
          />
          <br></br>
          <label>Password:</label>
          <input type='text'
            placeholder='Choose password'
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
