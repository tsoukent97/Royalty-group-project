import React from 'react'
import { Button } from 'semantic-ui-react'

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
<<<<<<< HEAD
    <h2>Home Page</h2>
    <div>
      <img src="./images/Royalty.png" alt="logo" />
    </div>
    <div>
      <button onClick={signupPath}>Signup</button>
      <button onClick={loginPath}>Login</button>
    </div>

=======
      <div className='home'>
        <h1>Loyaltea Home Page</h1>
        <Button.Group size='large'>
          <Button onClick={signupPath}>Signup</Button>
          <Button.Or />
          <Button positive onClick={loginPath}>Login</Button>
        </Button.Group>
      </div>
>>>>>>> main
    </>
  )
}

export default Home
