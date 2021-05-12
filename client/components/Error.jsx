import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

export default function Error (props) {
  return (
    <div>
      {props.errorMessage === '' ? props.errorMessage : <Message info>
        <Message.Header><Icon name='info circle'/>{props.errorMessage}</Message.Header>
      </Message> }
    </div>
  )
}
