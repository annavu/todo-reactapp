import React from 'react';

class Item extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    edit: false
  };
}

changeBtn() {
  if(this.state.edit) {
    return (
      <div className="list__btn btn">
        <button className="btn__edit" >save</button>
        <i className="fa fa-times btn__remove" onClick={this.cancelEdit.bind(this)}></i>
      </div>
    );
  } 
    return (
      <div className="list__btn btn">
        <button className="btn__edit" onClick={this.editTask.bind(this)}>edit</button>
        <i className="fa fa-trash icon btn__remove"></i>
      </div>
  );
}
  

  render() {
    console.log(this.props.item.task);
    return (
      <div className="item">
        <li className="list__item"> {this.props.item.task}</li>
        {this.changeBtn()}
      </div>
    )
  }

  editTask() {
    this.setState({edit:true});
  }

  cancelEdit() {
    this.setState({edit:false});
  }

 
}

export default Item;