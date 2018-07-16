import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }


  render() {
    console.log(this.props.item.task);
    return (
      <div className="item">
        {this.renderTask()}
        {this.changeBtn()}
      </div>
    )
  }


  renderTask() {
    console.log(this.props.item)
    console.log(this.props)
    const {task, complete} = this.props.item;

    const taskStyle = {
      color: complete ? '#008000' : '#666',
      cursor: 'pointer'
    };

    const iconStyle = {
      color: complete ? '#008000' : '#888',
      cursor: 'pointer'
    };

    if(this.state.edit) {
      return (
        <input type="text" defaultValue={task} className="list__input" onSubmit={this.onSave.bind(this)} ref="editTask"/>
      );
    } 
      return (
        <div className="list__item" onClick={this.props.toggle.bind(this,task)}>
          <li style={taskStyle} > {task}</li>
          <i style={iconStyle} className="fa fa-check icon"></i>
        </div>
      );
    }


  changeBtn() {
    if(this.state.edit) {
      return (
        <div className="list__btn btn">
          <button className="btn__edit" onClick={this.onSave.bind(this)} >save</button>
          <i className="fa fa-times btn__remove" onClick={this.cancelEdit.bind(this)}></i>
        </div>
      );
    } 
      return (
        <div className="list__btn btn">
          <button className="btn__edit" onClick={this.editTask.bind(this)}>edit</button>
          <i className="fa fa-trash icon btn__remove" onClick={this.onDelete.bind(this)}></i>
        </div>
      );
    }
  
  
  editTask() {
    this.setState({edit:true});
    console.log(this.props.saveTask)
  }

  cancelEdit() {
    this.setState({edit:false});
  }

  onSave(e) {
    e.preventDefault();
    const oldTask = this.props.item.task;
    const newTask = this.refs.editTask.value;
    this.props.saveTask(oldTask,newTask);
    this.setState({edit:false});
  }

  onDelete(e) {
    e.preventDefault();
    this.props.deleteTask(this.props.item);
  }
 
};

export default Item;