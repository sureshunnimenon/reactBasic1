import React from 'react'

export default function UserInput(props) {
  return (
    <div>
        <input type="text" onClick={props.changed}/>
    </div>
  )
}
