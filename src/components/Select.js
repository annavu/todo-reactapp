import React from 'react';

class Select extends React.Component {

  render() {
    return (
      <select name="" className="select" onChange={this.handleSelect.bind(this)}>
        <option value="all">all</option>
        <option  value="complete">complete</option>
        <option value="incomplete">incomplete</option>
      </select>
    )
  }

  handleSelect(e) {
    const val = e.target.value;
    console.log(val);
    // console.log(this.props.show);
    if(val) {
      this.props.selectedTask(val)
    }
  }
};

export default Select;