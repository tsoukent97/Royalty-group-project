import React, { useState, useEffect } from 'react'

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
          <label>Password</label>
          <input type='text'
            placeholder='Password'
            name='password'
            required
            value={customerForm.password}
            onChange={handleChange}
          />
          <button>Sign up</button>
        </form>
      </div>
      <p>{ customerForm.username }</p>
      <p>{ customerForm.password }</p>
    </>
  )
}

export default Signup

// const initialBizData = {
//   username: '',
//   password: '',
//   email: '',
//   address: '',
//   phoneNumber: '',
//   userTyoe: 'business'
// }
// const [businessForm, setBusinessForm] = useState(initBusinessData)
