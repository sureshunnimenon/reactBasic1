import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
        <p onClick = {props.click}> I am a {props.name} and I am {props.age} years old! <span> { props.children} </span></p> 
        <input type="text" onChange ={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;