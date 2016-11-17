import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class DatabaseListItem extends Component {
  constructor() {
    super()
  }

  onClickHandler(e) {
    e.preventDefault()
  }

  render() {
    const db = this.props.db;
    return (
      <li class="list-group-item" key={db.name} ref="list">
        <a href="#" class="animated fadeIn" onClick={this.onClickHandler}>
          <i class="fa fa-fw fa-database"></i>
          {db.name}
        </a>
      </li>
    )
  }
}

