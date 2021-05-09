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
        <h1>Loyaltea Home Page</h1>
        <Button.Group size='large'>
          <Button onClick={signupPath}>Signup</Button>
          <Button.Or />
          <Button positive onClick={loginPath}>Login</Button>
        </Button.Group>
      </div>
    </>
  )
}

export default Home
