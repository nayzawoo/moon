import React, { Component } from 'react';

export default class CollectionListItem extends Component {
  constructor() {
    super()
    this.props
  }

  propTypes: {
    col: React.PropTypes.object
  }

  render() {
    const col = this.props.col
    return (
      <div>{col.name}</div>
    )
  }
}
