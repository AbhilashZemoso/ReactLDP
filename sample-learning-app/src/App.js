import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>Hello Avengers</h1>
        <Person name="Tony" age="40">Hobbies: building cool stuff</Person>
        <Person name="Captin Americe" age="140"/>
      </div>
    );
  }
}

export default App;
