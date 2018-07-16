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
    console.log(this.props.deleteTask);
    return (
      <div className="tasks" >
        <Title/>  
        <ul className="list">{this.showItems()}</ul>
      </div>
    )
  };


  
  showItems() {
    let items = this.props.items;
    const props = this.props;
    console.log(items);
    console.log(this.props)
    return items
    .filter(item => {
      if(this.props.show === 'complete') {
      return item.complete === true;
      } else if(this.props.show === 'incomplete') {
        return item.complete === false;
      } else {
        return true;
      }
    })
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