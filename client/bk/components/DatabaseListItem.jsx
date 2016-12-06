import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import CollectionsContainer from '../containers/CollectionsContainer'

export default class DatabaseListItem extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      firstOpen: false
    }
  }

  propTypes: {
    db: PropTypes.object,
  }

  onClickHandler(e) {
    e.preventDefault()
    this.setState({
      firstOpen: true,
      open: !this.state.open
    })
  }

  renderCollections(dbName) {
    if (this.state.firstOpen) {
      return (
        <CollectionsContainer dbName={dbName} />
      )
    }
  }

  render() {
    const db = this.props.db
    let classes = 'menu-item dbs-list-item'
    classes += this.state.open ? 'open' : ''
    return (
      <li class={classes} key={db.name}>
        <a href="#" class="animated fadeIn" onClick={this.onClickHandler.bind(this)}>
          <i class="fa fa-fw fa-caret-right tree-toggle-icon"></i>
          <i class="fa fa-fw fa-database db-icon"></i>
          {db.name}
        </a>
        <div class="collection-list">
          {this.renderCollections(db.name)}
        </div>
      </li>
    )
  }
}

