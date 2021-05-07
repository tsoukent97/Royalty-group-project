import React, {useState} from 'react'

let userInfo = {}

function Login (props) {
    const initialData = {
        username: "",
        password: "",
        business: "",
        business_password: ""
    }
    const [form, setForm] = useState(initialData)

    function handleChange (e) {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]:value
        })
    }

    function handleSubmit (e) {
        e.preventDefault()
        userInfo = form
        props.history.push('/Customerhome')
        return null
    }

    return (
        <>
        <div>
        <h2>Customer login page</h2>
           <form>
                <label>Username:</label>
                <input 
                placeholder="Enter username..." 
                name="username" 
                onChange={handleChange} 
                value={form.username}
                required>

                </input>

                <br></br>

                <label>Password:</label>
                <input 
                placeholder="Enter password..." 
                name="password" 
                type="password"
                onChange={handleChange} 
                value={form.password}
                required>
                </input>
                <br></br>
                <button type="button" onClick={handleSubmit}>Login</button>
            </form>
        </div>
        <div>
            <h2>Business login page</h2>
            <form>
                <label>Business:</label>
                <input 
                placeholder="Enter business..." 
                name="username" 
                onChange={handleChange} 
                value={form.business}
                required>
                </input>

                <br></br>

                <label>Password:</label>
                <input 
                placeholder="Enter password..." 
                name="password" 
                onChange={handleChange} 
                type="password"
                value={form.business_password}
                required>
                </input>
                <br></br>
                <button type="button" onClick={handleSubmit}>Login</button>
            </form>

        </div>
        </>
    )
}

export default Login