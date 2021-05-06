import React, {useState} from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'

function Login () {
  // const initialData = {
  // }
  // const [formData, setFormData] = useState(initialData)

  function handleClick (e) {
    e.preventDefault()
    const { username, password } = form
    register({ username, password }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
      .catch(err => {
        if (err.message === 'USER_UNAVAILABLE') {
          setError('Username is not available')
        }
      })
  }
  return (
    <>
      <h1>Sign up page</h1>

      <div>
        <form>
                First Name: <input placeholder='First Name' name="first_name"></input>
          <br></br>
                Last Name: <input placeholder='Last Name' name="last_name"></input>
          <br></br>
                Email: <input placeholder="Email" name="email"></input>
          <br></br>
          <button>Sign up</button>
        </form>
      </div>

    </>
  )
}

export default Login
