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
      <li>{this.props.item.task}</li>
    )
  }
}

export default Item;