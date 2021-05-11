import React from 'react'
import { Button, Container } from 'semantic-ui-react'

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
      <div>
        <Container textAlign='center'>
          <img className='logo' src="./images/royalty-lg.png" alt="logo" />
        </Container>
      </div>
      <div className='home'>
        <Button.Group size='large'>
          <Button primary onClick={signupPath}>Signup</Button>
          <Button.Or />
          <Button positive onClick={loginPath}>Login</Button>
        </Button.Group>
      </div>
    </>
  )
}

export default Home
