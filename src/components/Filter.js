import React from 'react';

  class Filter extends React.Component {

  render() {
    return (
      <form className="filter">
        <input type="text" ref="task" className="filter__input input" placeholder="search.." onChange={this.handleFilter.bind(this)}/>
      </form>
    )
  }  

  handleFilter() {
    const task =this.refs.task.value;
    // console.log(this.props.items)
    // console.log(this.props.filterTask)
    
    if(task) {
      this.props.filterTask(task)
    } else {
      this.props.filterTask('')
    }
  }
};

 export default Filter;