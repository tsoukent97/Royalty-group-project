import React from 'react'

function Home (props) {
  function signupPath (e) {
    e.preventDefault()
    props.history.push('/Signup')
  }

  function loginPath (e) {
    e.preventDefault()
    props.history.push('/CustomerLogin')
  }

  return (
    <>
      <div>
        <h2>Home Page</h2>
        <button onClick={signupPath}>Signup</button>
        <button onClick={loginPath}>Login</button>
      </div>

    </>
  )
}

export default Home
