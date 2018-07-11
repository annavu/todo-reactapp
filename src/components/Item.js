import React from 'react';

class Item extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     edit: false
//   };
// }
  

  render() {
    console.log(this.props.item.task);
    return (
      <div className="item">
        <li className="list__item"> {this.props.item.task}</li>
        <div className="list__btn btn">
          <button className="btn__edit">edit</button>
          <i className="fa fa-trash icon btn__remove"></i>
        </div>
      </div>
    )
  }
}

export default Item;