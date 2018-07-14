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
    /* <p>{this.props.filterText}</p> */
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
    return items
    .filter(item => {
      return item.task.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1;
    })
    .map(function(item, index) { 
      console.log(item.task)
      console.log(item);
      return <Item item={item} key={index} {...props} />
      
  })

  }
};

export default List;