import React, {useState} from 'react'


function Login () {
    const [form, setForm] = useState({
        Username: '',
        Password: ''
      })
    
    const [error, setError] = useState('')

    function hideError () {
        setError('')
    }

    // function handleChange (e) {
        
    // }

    function handleClick (e) {
        e.preventDefault()
        
            // .catch(err => {
            //     if (err.message === 'INVALID_CREDENTIALS') {
            //         SetError('Username and password combination not found')
            //     }
            // })
    }

    return (
        <>
        <h2>Login page</h2>
        <div onClick={hideError}>
            { error && `Error:${error}`}
        </div>

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