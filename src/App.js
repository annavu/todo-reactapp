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
      todo: JSON.parse(localStorage.getItem('todo')) || todo,
      filterText: '',
      show: 'all'
    }
  }

  // componentDidMount() {
  //   this.setState({todo:JSON.parse(localStorage.getItem('todo'))});
  // }


  render() {
    return (
      <div className="container">
        <Header/>
        <Form addToList={this.addToList.bind(this)}/>
        <div className="search">
          <Filter 
            filterTask={this.filterTask.bind(this)}
            filterText={this.state.filterText}
           />
           <Select 
            show={this.state.show}
            selectedTask={this.selectedTask.bind(this)}/>
        </div>
        <List 
          items={this.state.todo}
          toggle={this.toggle.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          filterText = {this.state.filterText}
          show={this.state.show}
        />
      </div>
    );
  }


 

  addToList(task) {
    this.state.todo.push({
      task: task,
      complete:false
    });
    this.setState({todo:this.state.todo});
    localStorage.setItem('todo', JSON.stringify(this.state.todo));
  }
  
  saveTask(oldT, newT) {
    const findTodo = this.state.todo.filter((item) => item.task === oldT)[0];
    findTodo.task = newT;
    this.setState({
      todo: this.state.todo
    })
    localStorage.setItem('todo', JSON.stringify(this.state.todo));
  }

  toggle(task) {
    const findTodo = this.state.todo.filter((item) => item.task === task)[0];
    findTodo.complete = !findTodo.complete;
    this.setState({todo: this.state.todo});
    localStorage.setItem('todo', JSON.stringify(this.state.todo));
  }

  deleteTask(task) {
    let updateTodo = this.state.todo;
    updateTodo = updateTodo.filter((item,index) => {
      return task !== item;
    });
    
    this.setState({todo:updateTodo});
    localStorage.setItem('todo', JSON.stringify(updateTodo));
  }

  filterTask(task) {
    this.setState({
      filterText: task
    })
  }

  selectedTask(task) {
    this.setState({
      show:task
    })
  }  
};

export default App;
