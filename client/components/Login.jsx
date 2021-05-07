import React, { useState } from 'react'

let userInfo = {}

function Login (props) {
  const initialData = {
    Username: '',
    Password: ''
  }

  const [form, setForm] = useState(initialData)

  const [error, setError] = useState('')

  function hideError () {
    setError('')
  }

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    userInfo = setForm
    props.history.push('/')
    return null
  }

  return (
    <>
      <h2>Login page</h2>
      <div onClick={hideError}>
        { error && `Error:${error}`}
      </div>

      <div>
        <form>
          <label>Username:</label>
          <input placeholder="Enter username..." name="username" onChange={handleChange}></input>
          <br></br>
          <label>Password:</label>
          <input placeholder="Enter password..." name="password" onChange={handleChange}></input>
          <br></br>
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login
