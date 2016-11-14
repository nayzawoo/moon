import React, { Component } from 'react';

/**
 * Databases List Component
 */
export default class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchDbs()
  }

  render() {
    // console.log(this.props.dbsList)
    if (this.props.dbsList.loading) {
    }
    return (
      <div class="panel panel-default">
        <div class="panel-heading">Databases</div>
        <ul class="list-group">
          {this.renderDatabasesList(this.props.dbsList.dbs)}
        </ul>
      </div>
    );
  }

  renderDatabasesList(dbs) {
    return dbs.map((db) => {
      const id =  Date.now()  + Math.random()
      return (
        <li class="list-group-item" key={id}>{db.name}</li>
      )
    })
  }
}
