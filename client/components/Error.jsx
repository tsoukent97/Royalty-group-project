import React from 'react'
import { Message } from 'semantic-ui-react'

export default function Error (props) {
  return (
    <div>
      {props.errorMessage === '' ? props.errorMessage : <Message info>
        <Message.Header>{props.errorMessage}</Message.Header>
      </Message> }
    </div>
  )
}