import React, { Component, Prototypes } from 'react';
import { connect } from 'react-redux';

let input;

class Item extends Component {
  handleChange(e) {
   input = e.target.value
  }
  handleKeyPress(e) {
    let target = this.props.item.id;
    let type = this.props.item.type;
    let value = e.target.value;
    if (e.key === 'Enter') {
      this.props.dispatch(finishEdit(value, target, type ))
    }
  }
  render() {
    const { item } = this.props;
    return (
      item.editing ? 
      <td>
        <input defaultValue={item.value} 
               onChange={e => this.handleChange(e)}
               onKeyPress={this.handleKeyPress} />
      </td> 
      : 
      <td>{item.value}</td>
    );
  }
}

export default connect()(Item);