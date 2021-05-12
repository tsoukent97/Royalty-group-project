import React from 'react'
import { Icon } from 'semantic-ui-react'

function Footer () {
  return (
    <>
      <br></br>
      <div className='footer'>
        <div className="ui segment">
          <h4>Contact us</h4>
          <div className="ui divider"></div>
          <p><Icon name='envelope' />loyaltea@post.com</p>
          <h4 className="ui horizontal divider">
          </h4>
        </div>
      </div>
    </>
  )
}

export default Footer
