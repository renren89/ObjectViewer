import React, { Component, Prototypes } from 'react';

export default class Metadata extends Component {
  componentDidMount() {
    console.log(Object.keys(this.props.metadata))
  }
  render() {
    const { metadata } = this.props;
    return (
      <div>
        <ul>
          {
            Object.keys(metadata).map(key => {
              return <li style={{ listStyleType: 'none'}} key={key}>{`${key}: ${metadata[key]}`}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
