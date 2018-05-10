import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Shreyansh', age: 24 },
      { name: 'Shrey', age: 24 },
      { name: 'Shruti', age: 18 }
    ],
    otherState: 'some other value',
    showDetails: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 24 },
        { name: 'Shrey', age: 24 },
        { name: 'Shruti', age: 18 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Shreyansh', age: 24 },
        { name: event.target.value, age: 24 },
        { name: 'Shruti', age: 18 }
      ]
    } )
  }
  toggleShowDetails = () => {
    const doesShow = this.state.showDetails;
    this.setState({showDetails: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.toggleShowDetails}>Show/Hide Details</button>
        {
          this.state.showDetails ?
          <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Shrey!')}
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
