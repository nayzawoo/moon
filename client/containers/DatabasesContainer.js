import React, {Component} from  'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchDbs, fetchDbsSuccess} from '../actions/databases'
import Spinner from '../components/Spinner'
import DatabaseListItem from '../components/DatabaseListItem'

class DatabasesList extends Component {
  componentWillMount() {
    this.props.fetchDbs()
  }

  renderDatabasesList(dbs) {
    if (!dbs.length) {
      return <Spinner />
    }

    return dbs.map((db) => {
      return (
        <DatabaseListItem key={db.name} db={db}/>
      )
    })
  }

  render() {
    return (
      <div class="panel panel-default">
        <div class="panel-heading">Databases</div>
        <ul class="list-group">
          {this.renderDatabasesList(this.props.dbs)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dbs: state.db.dbs
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchDbs}, dispatch)
}

const DatabasesContainer = connect(mapStateToProps, mapDispatchToProps)(DatabasesList)

export default DatabasesContainer
