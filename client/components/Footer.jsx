import React from 'react'
import { Container } from 'semantic-ui-react'

function Footer () {
  return (
    <Container textAlign='center' className='footer'>
      <div className="ui inverted segment">
        <h4>Contact us</h4>
        <div className="ui inverted divider"></div>
        <p>loyaltea@post.com</p>
        <h4 className="ui horizontal inverted divider">
        </h4>
      </div>
    </Container>
  )
}

export default Footer
