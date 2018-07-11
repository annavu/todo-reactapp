import React from 'react';
import Item from './Item';
import Title from './Title';

class List extends React.Component {

  showItems() {
    let items = this.props.items;
    console.log(items);
    return items.map(function(item, index) { 
      console.log(item.task)
      return <Item item={item} key={index}/>
  })

  }

  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }

  

  render() {
    console.log(this.props.items);


    return (
      <div>
      <Title/>
      <ul className="list">
      {this.showItems()}
      </ul>
      </div>
    )
  }
};

export default List;