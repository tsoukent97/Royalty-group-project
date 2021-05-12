import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

function Footer () {
  return (
    <>
      <br></br>
      <div className="ui segment">
        <Header as='h2' block>Contact us</Header>
        <Header as='h4'>
          <Icon name='envelope' />loyaltea@post.com
        </Header>
      </div>
    </>
  )
}

export default Footer
