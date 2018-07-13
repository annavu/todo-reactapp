import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        alert: ''
    }
}

handleTask(e) {
  e.preventDefault();
  console.log(this.props.addToList);
  const task = e.target.elements.task.value;
  console.log(task);

  if(task) {
    e.target.elements.task.value = '';
    this.props.addToList(task);
  } else {
    this.setState({
      alert: 'Please enter the task'
    })
  }
}



  render() {
    return (
      <form className="form" onSubmit={this.handleTask.bind(this)}>
        <input type="text" name="task" className="input" placeholder="enter your task.." autoComplete="off"/>  
        <button className="add">add</button>
      </form>
    )
  }
};

export default Form;