import React, {useState, useEffect} from 'react'

function Login () {
    // const initialData = {
    
    // }

    // const [formData, setFormData] = useState(initialData)

    return (
        <>
        <h1>Login Page</h1>

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