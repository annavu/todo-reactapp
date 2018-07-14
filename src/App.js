import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Filter from './components/Filter';
import Select from './components/Select';
import './App.css';


const todo = [
  {
    task: 'react all day',
    complete: true
  },
  {
    task: 'git now',
    complete: false
  }
];



class App extends Component {
  constructor(props) {
    super(props) 
    this.state = { 
      todo,
      filterText: ''
    }
  }

  addToList(task) {
    this.state.todo.push({
      task: task,
      complete:false
    });
    this.setState({todo:this.state.todo});
  }
  
  saveTask(oldT, newT) {
    const findTodo = this.state.todo.filter((item) => item.task === oldT)[0];
    findTodo.task = newT;
    this.setState({
      todo: this.state.todo
    })
  }

  toggle(task) {
    const findTodo = this.state.todo.filter((item) => item.task === task)[0];
    console.log(this.state.todo);
    findTodo.complete = !findTodo.complete;
    this.setState({todo: this.state.todo});
  
  }

  delete(task) {
    let updateTodo = this.state.todo;
    updateTodo = updateTodo.filter((item,index) => {
      return task !== item;
    });
    this.setState({todo:updateTodo});
  }

  filterTask(task) {
    // let filterTodo = this.state.todo;
    // filterTodo = filterTodo.filter((item,index) => {
    //   return task === item;
    // });
    // this.setState({todo:filterTodo});
    this.setState({
      filterText: task
    })
  }



  render() {
    
console.log(this.state.todo);
console.log(this.state.filterText)
    return (
      <div className="container">
       <Header/>
       <Form addToList={this.addToList.bind(this)}/>
       <div className="search">
       <Filter 
       
       filterTask={this.filterTask.bind(this)}
       filterText={this.state.filterText}
       />
       <Select/>
       </div>
       <List 
       items={this.state.todo}
       toggle={this.toggle.bind(this)}
       saveTask={this.saveTask.bind(this)}
       delete={this.delete.bind(this)}
       filterText = {this.state.filterText}
       />

  
      </div>
    );
  }
}

export default App;
