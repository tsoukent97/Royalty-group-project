import React from 'react'
import { Button } from 'semantic-ui-react'

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
      <div className='home'>
        <h1>Home Page</h1>
        <Button onClick={signupPath}>Signup</Button>
        <Button onClick={loginPath}>Login</Button>
      </div>
    </>
  )
}

export default Home
