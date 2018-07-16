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
  const task = e.target.elements.task.value;
  // console.log(task);

  if(task) {
    e.target.elements.task.value = '';
    this.props.addToList(task);
    this.setState({
      alert: ''
    })
  } else {
    this.setState({
      alert: 'Please enter the task'
    })
  }
}



  render() {
    return (
      <div className="action">
        <form className="form" onSubmit={this.handleTask.bind(this)}>
          <input type="text" name="task" className="input" placeholder="enter your task.." autoComplete="off"/>  
          <button className="add">add</button>
        </form>
        <p className="alert">{this.state.alert}</p>
      </div>
    )
  }
};

export default Form;