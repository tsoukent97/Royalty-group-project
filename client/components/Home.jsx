import React from 'react'

function Home (props) {

  function signupPath (e) {
    e.preventDefault()
    props.history.push('/CustomerSignup')
  }

  function loginPath (e) {
    e.preventDefault()
    props.history.push('/CustomerLogin')
  }

  return (
    <>
    <h2>Home Page</h2>
    <div>
      <img src="./images/Royalty.png" alt="logo" />
    </div>
    <div>
      <button onClick={signupPath}>Signup</button>
      <button onClick={loginPath}>Login</button>
    </div>

    </>
  )
}

export default Home
