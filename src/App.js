import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

import './App.css';


const todo = [
  {
    task: 'learn react',
    complete: false
  },
  {
    task: 'learn css',
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

  onAdd() {
    console.log('add');
  }

  



  render() {
    
console.log(this.state.todos);
    return (
      <div className="container">
       <Header/>
       <Form onAdd={this.onAdd.bind(this)}  />
       <List items={this.state.todo}/>

  
      </div>
    );
  }
}

export default App;
