import React from 'react';
import Item from './Item';
import Title from './Title';

class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }




  render() {
    console.log(this.props.items);
    console.log(this.props.saveTask)
    console.log(this.props.toggle);
    console.log(this.props.delete);
    return (
      <div >
      <Title/>
      <ul className="list">
      {this.showItems()}
      </ul>
      </div>
    )
  }


  
  showItems() {
    let items = this.props.items;
    const props = this.props;
    console.log(items);
    console.log(this.props)
    return items.map(function(item, index) { 
      console.log(item.task)
      console.log(item);
      return <Item item={item} key={index} {...props}/>
      
  })

  }
};

export default List;