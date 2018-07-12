import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

import './App.css';


const todo = [
  {
    task: 'react all day',
    complete: false
  },
  {
    task: 'git now',
    complete: true
  }
];



class App extends Component {
  constructor(props) {
    super(props) 
    this.state = { 
      todo
    }
  }

  
  



  render() {
    
console.log(this.state.todos);
    return (
      <div className="container">
       <Header/>
       <Form/>
       <List items={this.state.todo}/>

  
      </div>
    );
  }
}

export default App;
