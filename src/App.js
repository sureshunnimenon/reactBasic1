import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {

  state = {
    persons: [
      {name: "Abhishek"  , age: "18" },
      {name: "Betty" , age: "19" },
      {name: "Chitra" , age: "20" }
    ],

    name: "Suresh Naloor"
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked!")
    // above for testing only

    // this.state.persons[1].name="Balachandran" - dont do this lexically correct but react doesnt allow
    this.setState({persons: [
      {name: newName  , age: "18" },
      {name: newName, age: "19" },
      {name: newName , age: "20" }
    ] })
  }

  nameChangedHanlder = (event) => {
    this.setState({persons: [
      {name: 'Max'  , age: "18" },
      {name: event.target.value, age: "19" },
      {name: 'Average' , age: "20" }
    ] })
  }

  userNameHandler = (e) => {
    this.setState({name: "Greatest coder ever!"})
    console.log(this.state.name)
  }

  userNameChged = (event) => {
    console.log("inut name changed")
    this.setState({name: event.target.value})
    console.log(this.state)
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
          <h1> Hi I am React App!</h1>
          {/* <button onClick={this.switchNameHandler.bind(this, "Suresh Menon")}>Switch Name</button> */}
          <button
              style = { style} 
              onClick={() => this.switchNameHandler('Sanjeev S Menon')}> Switch Name </button>
          <Person  
            name= {this.state.persons[0].name} 
            age="28" /> 
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, "Suresh Naloor Unni")}
            changed={this.nameChangedHanlder}> 
            My Hobbies: Travel </Person>
          <Person 
            name = "Sruthi" 
            age="18"/>
          <Person 
            name = {this.state.persons[2].name} 
            age="18"/>

          <UserInput changed={this.userNameChged} name={this.state.name}/>
          <UserOutput name="Suresh Unni Menon"  />
          <UserOutput name={this.state.name} clicked={this.userNameHandler} />
      </div>
    );
  }
}

export default App;
