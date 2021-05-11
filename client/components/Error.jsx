import React from 'react'

export default function Error (props) {
  return (
    <div>
      {props.errorMessage === '' ? props.errorMessage : <div style={{ color: 'red' }}>{props.errorMessage}</div> }
    </div>

  )
}