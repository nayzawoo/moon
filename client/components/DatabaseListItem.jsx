import React, { Component } from 'react';

export default class DatabaseListItem extends Component {
  constructor() {
    super()
  }

  render() {
    const db = this.props.db;
    return (
      <li class="list-group-item" key={db.name}>
        <a href="#">
          <i class="fa fa-fw fa-database"></i>
          {db.name}
        </a>
      </li>
    )
  }
}

