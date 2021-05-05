import React, {useState} from 'react'

function Login () {
    const [form, setForm] = useState({
        Username: '',
        Password: ''
      })
    function handleClick (e) {
        e.preventDefault()
    }
    return (
        <>
        <h2>Login Page</h2>

        <div>
            <form>
                <select>
                    <option value="">User Type </option>
                    <option value='customer'>Customer</option>
                    <option value='business'>Buiness</option>
                </select>
                
                <input placeholder="Enter username" name="username"></input>

                <input placeholder="Enter password" name="password"></input>
                
                <button onClick={handleClick}>Login</button>
            </form>
        </div>
        </>
    )
}

export default Login 