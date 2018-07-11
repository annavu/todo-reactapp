import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        alert: ''
    }
}

addTask(e) {
  e.preventDefault();
  console.log(123);
  const task = e.target.elements.task.value;
  console.log(task);

  if(task) {
    e.target.elements.task.value = '';
  } else {
    this.setState({
      alert: 'Please enter the task'
    })
  }
}



  render() {
    return (
      <form className="form" onSubmit={this.addTask.bind(this)}>
        <input type="text" name="task" className="input" placeholder="enter your task.." autoComplete="off"/>  
        <button className="add">add</button>
      </form>
    )
  }
};

export default Form;